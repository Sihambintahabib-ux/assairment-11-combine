import { useQuery } from "@tanstack/react-query";
import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
import useAuth from "../../../hooks/useAuth";
// import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminClubs = () => {
  // const { user } = useAuth();
  // const {
  //   isLoading,
  //   isError,
  //   data: adminClubs = [],
  //   // refetch,
  // } = useQuery({
  //   queryKey: ["adminClubs", user?.email],
  //   queryFn: async () => {
  //     const result = await axios(`${import.meta.env.VITE_API_URL}/admin-clubs`);
  //     return result.data;
  //   },
  // });

  // console.log("adminClubs", adminClubs);
  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  // if (isError) return <ErrorPage></ErrorPage>;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    isError,
    data: adminClubs = [],
    refetch,
  } = useQuery({
    queryKey: ["adminClubs", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/admin-clubs`);
      return result.data;
    },
  });

  console.log("adminClubs", adminClubs);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <title>Manage club by admin</title>
        <div className="py-8">
          <p>Admin : Manage Clubs (manage club by admin)</p>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      clubName
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      managerEmail
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Fees
                    </th>
                    {/* <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Address
                    </th> */}
                    {/* <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      category
                    </th> */}
                    {/* <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      membershipFee
                    </th> */}
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {adminClubs.map((data) => (
                    <SellerOrderDataRow
                      refetch={refetch}
                      key={data._id}
                      data={data}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminClubs;
