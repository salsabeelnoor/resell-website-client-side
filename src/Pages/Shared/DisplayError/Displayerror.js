import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Displayerror = () => {
  const error = useRouteError();

  return (
    <div className="text-center">
      <p className="text-red-500 text-lg">Something Went Wrong!!!</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Go to{" "}
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </h4>
    </div>
  );
};

export default Displayerror;
