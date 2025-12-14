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
        element: <ClubsDetails />,
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
        path: "add-club",
        element: (
          <PrivateRoute>
            <Addclubs></Addclubs>
          </PrivateRoute>
        ),
      },
      {
        path: "clubmembers",
        element: (
          <PrivateRoute>
            <ClubMembers></ClubMembers>
          </PrivateRoute>
        ),
      },
      {
        path: "managerClubs",
        element: (
          <PrivateRoute>
            <ManagerClubs></ManagerClubs>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-users",
        element: (
          <PrivateRoute>
            <AdminUsers />
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
        path: "my-clubs", // my-clubs // my-orders
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <MyClubs></MyClubs>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-clubs",
        element: <AdminClubs></AdminClubs>,
      },
    ],
  },
]);
