import React from "react";
import { Link } from "react-router-dom";
import login from "../../../assets/login/login2.jpg";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-[800px] flex flex-row">
      <div>
        <img className="h-full w-full" src={login} alt="" />
      </div>
      <div className="flex flex-col lg:mx-24 mx-3 ">
        <h2 className="font-syncopate text-center text-4xl font-bold text-blue-800 mt-20">
          Please Login
        </h2>
        <div className=" h-auto card lg:w-[500px] w-auto  border-2 shadow-xl pt-12 mt-10">
          <div className="card-body pt-0">
            <form className="flex flex-col">
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-base font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 border-violet-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-violet-900 focus:ring-1 focus:ring-violet-900"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-base font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border-2 border-violet-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-violet-900 focus:ring-1 focus:ring-violet-900"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="mb-3">
                <h2 className="text-base text-red-400 text-left font-medium ">
                  {/* {error} */}
                </h2>
              </div>
              <button
                type="submit"
                className="btn my-3 w-full bg-transparent border-2 border-primary text-gray-800 hover:text-white hover:bg-primary hover:border-2"
              >
                Submit
              </button>
            </form>
            <div className="mb-3">
              <h2 className=" text-sm  text-gray-800  text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-violet-900 font-medium">
                  Sign Up
                </Link>
              </h2>
              <h2 className=" text-base font-medium text-gray-900 mt-3 text-center">
                Also Log in With
              </h2>
              <button className="btn my-3 w-full bg-transparent border-2 border-primary text-gray-800 hover:text-white hover:bg-primary hover:border-2">
                <FaGoogle className="mr-2"></FaGoogle>
                <h2>Google</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
