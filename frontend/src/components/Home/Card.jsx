import { Link } from "react-router";

const Card = ({ club }) => {
  const {
    _id,
    bannerImage,
    category,
    clubName,
    // description,
    location,
    // managerEmail,
    membershipFee,
    status,
    // updateAt,
  } = club || {};
  console.log(" club", club);
  return (
    <Link
      to={`/clubs/${_id}`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={bannerImage}
            alt="Plant Image"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div>
            <div className="font-semibold text-lg">{clubName}</div>
            <div className="font-semibold text-lg">Category : {category}</div>
            <div className="font-semibold text-lg">Location : {location} </div>
            <div className="font-semibold text-lg ">Quantity: {status}</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold"> Fee : ${membershipFee}</div>
            </div>
          </div>
          <div>
            <Link
              to={`/clubs/${_id}`}
              className="  p-3 m- text-center bg-amber-100 w-full rounded-xl"
              // className="col-span-1  p-3 m- text-center bg-amber-100 w-full rounded-xl"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
