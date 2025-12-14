import React from "react";
// import DeleteModal from "../../Modal/DeleteModal";
// import { Link } from "react-router";
// import UpdatePlantModal from "../../Modal/UpdatePlantModal";
// import { useState } from "react";

const MembersPaymentHistoryRow = ({ data }) => {
  // let [isOpen, setIsOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }
  // function closeModal() {
  //   setIsOpen(false);
  // }
  const {
    clubName,
    userEmail,
    clubId,
    amount,
    // stripePaymentIntentId,
    status,
    type,
    createdAt,
  } = data;
  return (
    <tr>
      <title>manager club member joiner member list</title>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{clubName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{userEmail}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{amount}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">
          {type} {clubId ? type === "membershipss" : "events"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{createdAt}</p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{stripePaymentIntentId}</p>
      </td> */}

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p
          className={` font-semibold text-center px-3 ${
            data.status == "completed"
              ? "bg-green-200"
              : data.status == "pendingPayment"
              ? "bg-blue-200"
              : data.status == "expired"
              ? "bg-red-200"
              : "bg-gray-300"
          } opacity-100 rounded-full`}
        >
          {status}
        </p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={openModal}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative"></span>
        </span>
        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td> */}
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsEditModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </span>
        <UpdatePlantModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </td> */}
    </tr>
  );
};

export default MembersPaymentHistoryRow;
