import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useCustomer from "../Hooks/useCustomer";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isCustomer] = useCustomer(user?.email);
  console.log("customer state", isCustomer);

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
            {isCustomer === "buyer" && (
              <>
                <li>
                  <Link
                    className="text-lg font-medium capitalize hover:text-blue-800 rounded-md"
                    to="/dashboard"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-medium capitalize hover:text-blue-800 rounded-md"
                    to="/dashboard"
                  >
                    WishList
                  </Link>
                </li>
              </>
            )}
            {isCustomer === "seller" && (
              <>
                <li>
                  <Link
                    className="text-lg font-medium capitalize hover:text-blue-800 rounded-md"
                    to="/dashboard"
                  >
                    Add A Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-medium capitalize hover:text-blue-800 rounded-md"
                    to="/dashboard"
                  >
                    My Products
                  </Link>
                </li>
              </>
            )}
            {isCustomer === "admin" && (
              <>
                <li>
                  <Link
                    className="text-lg font-medium capitalize hover:text-blue-800 rounded-md"
                    to="/dashboard"
                  >
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-medium capitalize hover:text-blue-800 rounded-md"
                    to="/dashboard"
                  >
                    All Buyers
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
