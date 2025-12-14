import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import { Link } from "react-router";
const CustomerOrderDataRow = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  console.log(data);
  const {
    clubId,
    clubName,
    membershipFee,
    userEmail,
    status,
    bannerImage,
    category,
    location,
    expiresAt,
  } = data;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={bannerImage}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{clubName}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{location}</p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">5</p>
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p
          className={` font-semibold text-center px-3 ${
            data.status == "active"
              ? "bg-green-200"
              : data.status == "pendingPayment"
              ? "bg-blue-200"
              : data.status == "expired"
              ? "bg-red-200"
              : "bg-gray-300"
          } opacity-100 rounded-full`}
        >
          {expiresAt}
        </p>
      </td>

      <td className="p-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block p-3 font-semibold text-lime-900 leading-tight"
        >
          <span
            className={`absolute cursor-pointer inset-0  
              ${
                data.status == "active"
                  ? "bg-green-200"
                  : data.status == "pendingPayment"
                  ? "bg-blue-200"
                  : data.status == "expired"
                  ? "bg-red-200"
                  : "bg-gray-300"
              } opacity-50 rounded-full`}
          ></span>
          <span className="relative cursor-pointer">{status}</span>
        </button>

        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td>
      <Link to={`/clubs/${clubId}`}>
        {" "}
        <td className="px-8 py-5 border-b border-gray-200 bg-white text-sm">
          {/* <p className="text-gray-900"> view ddetails</p> */}
          <button
            // to={`/clubs/${_id}`}
            className="w-full text-center p-3 rounded-xl bg-orange-400 hover:bg-orange-700 transition font-semibold shadow"
          >
            View Details
          </button>
        </td>
      </Link>
    </tr>
  );
};

export default CustomerOrderDataRow;
