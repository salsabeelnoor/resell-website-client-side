import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import CategoryById from "../../Pages/CategoryById/CategoryById/CategoryById";
import AllBuyers from "../../Pages/Dashboard/AdminDashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminDashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/BuyerDashboard/MyOrders/MyOrders";
import WishList from "../../Pages/Dashboard/BuyerDashboard/WishList/WishList";
import AddAProduct from "../../Pages/Dashboard/SellerDashboard/AddAProduct/AddAProduct";
import MyProducts from "../../Pages/Dashboard/SellerDashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRote/PrivateRoute";
import Route404 from "../Route404/Route404";
import SellerRoute from "../SellerRoute/SellerRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/categories/:id",
        element: <CategoryById></CategoryById>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
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
