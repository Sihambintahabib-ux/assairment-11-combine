import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="**manager** Add club"
        address="add-club"
      />
      <MenuItem
        icon={MdHomeWork}
        label="**manager** Members" //Club Members
        address="clubmembers"
      />
      <MenuItem
        icon={MdHomeWork}
        label="**manager** Clubs" //Manager Clubs
        address="managerClubs"
      />
    </>
  );
};

export default SellerMenu;
