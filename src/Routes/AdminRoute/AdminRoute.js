import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useCustomer from "../../Hooks/useCustomer";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isCustomer, isCustomerLoading] = useCustomer(user?.email);
  const location = useLocation();

  if (loading || isCustomerLoading) {
    <Loading></Loading>;
  }

  if (user && isCustomer === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
