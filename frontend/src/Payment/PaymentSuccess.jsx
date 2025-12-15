import React from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { useRef } from "react";
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const dublicajoin = useRef(false);
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);
  useEffect(() => {
    console.log(dublicajoin.current);

    if (!sessionId || dublicajoin.current === true) {
      // fetch
      return;
    }
    dublicajoin.current = true;
    axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, {
      sessionId,
      //        userEmail: user.email,
      // clubId: clubId,
    });
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <CgProfile className="w-16 h-16  mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">Thank you for Joining.</p>
        <Link
          to="/dashboard/my-clubs" // my-clubs // dashboard/my-orders
          className="inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
        >
          Go to My Clubs
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
