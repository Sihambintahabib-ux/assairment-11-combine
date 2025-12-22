import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ClubsDetails from "../pages/ClubsDetails/ClubsDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlant from "../pages/Dashboard/Manager/Addclubs";
import ManageUsers from "../pages/Dashboard/Admin/AdminUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";

// import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import { createBrowserRouter } from "react-router";
import PaymentSuccess from "../Payment/PaymentSuccess";
import MyClubs from "../pages/Dashboard/Customer/MyClubs";
import Clubs from "../components/Home/clubs";
import ClubMembers from "../pages/Dashboard/Manager/ClubMembers";
import Addclubs from "../pages/Dashboard/Manager/Addclubs";
import AdminUsers from "../pages/Dashboard/Admin/AdminUsers";
import AdminClubs from "../pages/Dashboard/Admin/AdminClubs";
import ManagerClubs from "../pages/Dashboard/Manager/managerclubs";
import MyEvents from "../pages/Dashboard/Customer/MyEvents";
import PaymentHistory from "../pages/Dashboard/Customer/PaymentHistory";
import ViewPayments from "../pages/Dashboard/Admin/ViewPayments";
import EventRegistrations from "../pages/Dashboard/Manager/EventRegistrations";
import EventsManagement from "../pages/Dashboard/Manager/EventsManagement";
import AddEvents from "../pages/Dashboard/Manager/AddEvents";
import Events from "../components/Home/Events";
import EventsDetails from "../pages/EventsDetails/EventsDetails";
import ManagersRoutes from "./ManagersRoutes";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/clubs/:id",
        element: (
          <PrivateRoute>
            <ClubsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/events",
        element: <Events />,
      },

      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventsDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "paymenthistory", // member
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "payment-success", // member
      //   element: (
      //     <PrivateRoute>
      //       {/* <MyOrders /> */}
      //       <PaymentSuccess></PaymentSuccess>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "my-clubs", // member
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <MyClubs></MyClubs>
          </PrivateRoute>
        ),
      },
      {
        path: "my-events", // member
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <MyEvents></MyEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "add-club", // manager
        element: (
          <PrivateRoute>
            <ManagersRoutes>
              <Addclubs></Addclubs>
            </ManagersRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "clubmembers", // manager
        element: (
          <PrivateRoute>
            {" "}
            <ManagersRoutes>
              <ClubMembers></ClubMembers>
            </ManagersRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "managerClubs", // manager
        element: (
          <PrivateRoute>
            <ManagersRoutes>
              <ManagerClubs></ManagerClubs>
            </ManagersRoutes>
          </PrivateRoute>
        ),
      },

      {
        path: "add-events", // manager
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <AddEvents></AddEvents>
          </PrivateRoute>
        ),
      },

      {
        path: "event-registrations", // manager
        element: (
          <PrivateRoute>
            {" "}
            <ManagersRoutes>
              <EventRegistrations></EventRegistrations>
            </ManagersRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "events-management", // manager
        element: (
          <PrivateRoute>
            <ManagersRoutes>
              <EventsManagement></EventsManagement>
            </ManagersRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-users", // admin
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminUsers />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },

      {
        path: "admin-clubs", // admin
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminClubs></AdminClubs>,
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "View-Payments", //admin
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ViewPayments></ViewPayments>,
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
