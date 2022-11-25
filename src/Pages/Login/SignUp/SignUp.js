import React from "react";
import { Link } from "react-router-dom";
import signup from "../../../assets/login/signup.jpg";

const SignUp = () => {
  return (
    <div className="min-h-[800px] flex flex-row">
      <div>
        <img className="h-auto w-full" src={signup} alt="" />
      </div>
      <div className="flex flex-col lg:mx-24 mx-3 ">
        <h2 className="font-syncopate text-center text-4xl font-bold text-blue-800 mt-20">
          Please SignUp
        </h2>
        <div className=" h-auto card lg:w-[500px] w-auto  border-2 shadow-xl pt-12 mt-10">
          <div className="card-body pt-0">
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-2 border-primary rounded-lg block w-full p-2.5  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Your PhotoURL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="border-2 border-primary rounded-lg block w-full p-2.5  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your PhotoURL"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 border-primary rounded-lg block w-full p-2.5  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border-2 border-primary rounded-lg block w-full p-2.5  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn my-3 w-full bg-transparent border-2 border-primary text-gray-800 hover:text-white hover:bg-primary hover:border-2"
              >
                Sign Up
              </button>
            </form>
            <div className="mb-3">
              <h2 className=" text-sm  text-gray-800 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-violet-900 font-medium">
                  Log In
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
