import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryById from "../../Pages/CategoryById/CategoryById/CategoryById";
import AllBuyers from "../../Pages/Dashboard/AdminDashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminDashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/BuyerDashboard/MyOrders/MyOrders";
import WishList from "../../Pages/Dashboard/BuyerDashboard/WishList/WishList";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import WishListPayment from "../../Pages/Dashboard/Payment/WishListPayment";
import AddAProduct from "../../Pages/Dashboard/SellerDashboard/AddAProduct/AddAProduct";
import MyProducts from "../../Pages/Dashboard/SellerDashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Displayerror from "../../Pages/Shared/DisplayError/Displayerror";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRote/PrivateRoute";
import Route404 from "../Route404/Route404";
import SellerRoute from "../SellerRoute/SellerRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Displayerror></Displayerror>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories/:id",
        element: <CategoryById></CategoryById>,
        loader: ({ params }) =>
          fetch(
            `https://resell-website-assignment-server-side.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Displayerror></Displayerror>,
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://resell-website-assignment-server-side.vercel.app/bookings/payment/${params.id}`
          ),
      },
      {
        path: "/dashboard/wishlist/payment/:id",
        element: <WishListPayment></WishListPayment>,
        loader: ({ params }) =>
          fetch(
            `https://resell-website-assignment-server-side.vercel.app/wishlists/payment/${params.id}`
          ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Route404></Route404>,
  },
]);
