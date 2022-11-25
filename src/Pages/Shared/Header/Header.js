import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/laptop_logo_1.png";

const Header = () => {
  return (
    <div className="bg-gray-100 shadow-lg">
      <div className=" flex flex-col lg:px-10 py-5">
        <div className="lg:flex lg:flex-row lg:justify-between hidden lg:px-5">
          <div className="flex lg:justify-start justify-center">
            <img
              className="lg:w-28 lg:h-28 w-12 h-16 mt-[-20px]"
              src={logo}
              alt=""
            />
            <Link
              to="/"
              className="font-syncopate font-semibold lg:text-5xl text-2xl text-primary mt-3 -ml-3"
            >
              Laptop Trades
            </Link>
          </div>
        </div>
        <hr className="lg:block hidden border-1 bg-slate-400 mx-5 -mt-4 mb-3" />
        <div className="navbar bg-base-100 lg:px-5 rounded-lg">
          <div className="navbar-start">
            <ul className="menu menu-horizontal p-0 lg:flex hidden ">
              <li>
                <Link
                  to="/"
                  className="text-lg font-medium uppercase hover:text-blue-800 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <Link className="text-lg font-medium uppercase hover:text-blue-800 rounded-md">
                  Categories
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 w-full bg-base-100 rounded-lg">
                  <li>
                    <Link className="text-md font-medium uppercase hover:text-blue-800 rounded-md">
                      Apple
                    </Link>
                  </li>
                  <li>
                    <Link className="text-md font-medium uppercase hover:text-blue-800 rounded-md">
                      Hp
                    </Link>
                  </li>
                  <li>
                    <Link className="text-md font-medium uppercase hover:text-blue-800 rounded-md">
                      Dell
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link className="text-lg font-medium uppercase hover:text-blue-800 rounded-md">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/"
                    className="text-base font-medium uppercase hover:text-pink-800"
                  >
                    Home
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link className="text-lg font-medium uppercase hover:text-blue-800 rounded-md">
                    Categories
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 w-full bg-base-100 rounded-lg">
                    <li>
                      <Link className="text-md font-medium uppercase hover:text-blue-800 rounded-md">
                        Apple
                      </Link>
                    </li>
                    <li>
                      <Link className="text-md font-medium uppercase hover:text-blue-800 rounded-md">
                        Hp
                      </Link>
                    </li>
                    <li>
                      <Link className="text-md font-medium uppercase hover:text-blue-800 rounded-md">
                        Dell
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-base font-medium uppercase hover:text-pink-800"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="btn btn-primary bg-transparent rounded-lg hover:text-white">
                    Log in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center flex lg:hidden pr-5">
            <img className="w-16 h-16 -ml-5" src={logo} alt="" />
            <Link
              to="/"
              className="font-syncopate font-semibold text-xl text-primary  "
            >
              Laptop Trades
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link
                  to="/login"
                  className="btn btn-primary hidden lg:flex mr-2 bg-transparent rounded-lg hover:text-white"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
