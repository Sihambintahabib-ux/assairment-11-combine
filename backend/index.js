const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  deserialize,
} = require("mongodb");
const admin = require("firebase-admin");
const port = process.env.PORT || 3000;
//add strine key :
const stripe = require("stripe")(process.env.STRIPE_KEY);

const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString(
  "utf-8"
);
const serviceAccount = JSON.parse(decoded);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
// middleware
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      // "http://localhost:5173",
      // "http://localhost:5174",
      // "https://b12-m11-session.web.app",
    ],
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());

// jwt middlewares
const verifyJWT = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).send({ message: "Unauthorized Access!" });
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.tokenEmail = decoded.email;
    console.log(decoded);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Unauthorized Access!", err });
  }
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const url = process.env.MONGODB_URI;

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    //db collection: clubsCollection
    const db = client.db("clubsdb");
    const clubsCollection = db.collection("clubs");
    //!=============START===========!//

    //*save add-club to db
    app.post("/clubs", async (req, res) => {
      const clubData = req.body; //plantsdata =1.5
      console.log(clubData);
      const result = await clubsCollection.insertOne(clubData);
      res.send(result);
    });
    // *get all club from db
    app.get("/clubs", async (req, res) => {
      const result = await clubsCollection.find().toArray();
      console.log(result);
      res.send(result);
    });

    // *get one club from db
    app.get("/clubs/:id", async (req, res) => {
      const id = req.params.id;
      const result = await clubsCollection.findOne({ _id: new ObjectId(id) });
      // console.log("get - /clubs/:id", result);
      res.send(result);
    });

    // STRIPE Payment :
    app.post("/create-checkout-session", async (req, res) => {
      const paymentInfo = req.body;
      console.log("steipes", paymentInfo);
      // res.send(paymentInfo);

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, price_1234) of the product you want to sell
            price_data: {
              currency: "usd",
              product_data: {
                // name: paymentInfo?.name, //clubName
                name: paymentInfo?.clubName, //clubName

                // description: paymentInfo.description, // comment - not needed
                // images: [paymentInfo?.images], //bannerImage comment - not needed
                images: [paymentInfo?.bannerImage], //bannerImage comment - not needed
              },
              // unit_amount: paymentInfo?.price * 100, //membershipFee
              unit_amount: paymentInfo?.membershipFee * 100, //membershipFee
            },
            quantity: 1, // comment - not needed
          },
        ],
        customer_email: paymentInfo?.userEmail, // userEmail
        mode: "payment",
        metadata: {
          // plantId: paymentInfo?.plantId, //clubId
          clubId: paymentInfo?.clubId, //clubId
          member_email: paymentInfo?.userEmail, // userEmail

          // status: paymentInfo?.status,
        },
        success_url: `${process.env.CLIENT_URL}/payment-success`,
        cancel_url: `${process.env.CLIENT_URL}/clubs/${paymentInfo?.clubId}`,
      });
      // res.send(paymentInfo)
      res.send({ url: session.url });
    });

    //!=============END===========!//
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Server..assairment 11");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
