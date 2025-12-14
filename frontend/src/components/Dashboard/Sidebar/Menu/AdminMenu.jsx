import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdOutlineManageHistory } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserCog}
        label="**admin** Manage Users"
        address="admin-users"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="**admin** Manage clubs"
        address="admin-clubs"
      />
    </>
  );
};

export default AdminMenu;
