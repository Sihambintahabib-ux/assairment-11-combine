import React from "react";
import PurchaseModal from "./PurchaseModal";

const ClubMemberJoin = ({ closeModal, isOpen, clubs, id }) => {
  return (
    <div>
      <PurchaseModal
        id={id}
        clubs={clubs}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </div>
  );
};

export default ClubMemberJoin;
