import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Orders(Buyers)</Link>
            </li>
            <li>
              <Link to="/dashboard">Add A Product(Sellers)</Link>
            </li>
            <li>
              <Link to="/dashboard">My Products(Sellers)</Link>
            </li>
            <li>
              <Link to="/dashboard">All Sellers(Admin)</Link>
            </li>
            <li>
              <Link to="/dashboard">All Buyers(Admin)</Link>
            </li>
            <li>
              <Link to="/dashboard">
                Reported Items(Admin)/WishList(Buyers)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
