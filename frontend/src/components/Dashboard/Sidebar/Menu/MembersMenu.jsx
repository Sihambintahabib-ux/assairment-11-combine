import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { useState } from "react";
import BecomeSellerModal from "../../../Modal/BecomeSellerModal";
const MembersMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-yellow-400">
        <MenuItem icon={BsFingerprint} label="My Clubs" address="my-clubs" />
        <MenuItem icon={BsFingerprint} label="My Events" address="my-events" />
        <MenuItem
          icon={BsFingerprint}
          label="Payment History"
          address="paymenthistory"
        />

        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Seller</span>
        </div>
        <BecomeSellerModal closeModal={closeModal} isOpen={isOpen} />
      </div>
    </>
  );
};

export default MembersMenu;
