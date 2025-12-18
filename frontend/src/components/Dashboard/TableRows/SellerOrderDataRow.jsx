import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const SellerOrderDataRow = ({ data, refetch }) => {
  console.log("SellerOrderDataRow- admin club", data);
  const {
    _id,
    clubName,
    managerEmail,
    membershipFee,
    updatedAt,
    updateAt,
    status,
    bannerImage,
    category,
  } = data;
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  //* function handleApproved
  const axiosSecure = useAxiosSecure();
  const handleApproved = async () => {
    try {
      await axiosSecure.patch(`/updateClubStatusApproved/${_id}`, {
        email: data.managerEmail,
        status: "approved",
        updateAt,
      });
      toast.success("club approved");
      console.log(handleApproved);
      refetch();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  //* function handleReject
  const handleReject = async () => {
    try {
      await axiosSecure.patch(`/updateClubStatusReject/${_id}`, {
        email: data.managerEmail,
        status: "reject",
        updateAt,
      });
      toast.success("club reject");
      console.log(handleReject);
      refetch();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
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
        <p className="text-gray-900 ">{clubName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{managerEmail}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{membershipFee}</p>
      </td>

      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">Dhaka</p>
      </td> */}
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{category}</p>
      </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{status}</p>
      </td>
      <td className="flex items-center gap-2  px-6 py-7">
        <button onClick={handleApproved} className="text-blue-600">
          approved
        </button>
        <button onClick={handleReject} className="text-red-600">
          reject
        </button>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center gap-2">
          <select
            required
            className="p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md text-gray-900  bg-white"
            name="category"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">Start Processing</option>
            <option value="Delivered">Deliver</option>
          </select>
          <button
            onClick={() => setIsOpen(true)}
            className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Cancel</span>
          </button>
        </div>
        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td> */}
    </tr>
  );
};

export default SellerOrderDataRow;
