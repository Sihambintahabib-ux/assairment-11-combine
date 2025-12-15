import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import ManagerStatistics from "../../../components/Dashboard/Statistics/ManagerStatistics";
import MemberStatistics from "../../../components/Dashboard/Statistics/MemberStatistics";

import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      {/* <AdminStatistics /> */}
      {role === "member" && <MemberStatistics />}
      {role === "menager" && <ManagerStatistics />}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
