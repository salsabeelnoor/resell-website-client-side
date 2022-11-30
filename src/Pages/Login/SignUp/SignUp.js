import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import signup from "../../../assets/login/signup.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [radioSelected, setRadioSelected] = useState("buyer");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const customerState = radioSelected;
    console.log("radiobtn", radioSelected);

    const customers = {
      name,
      email,
      image: photoURL,
      customerState,
    };
    const sellerCustomer = {
      name,
      email,
      image: photoURL,
      customerState,
      verified: false,
    };
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        handleUpdateUserProfile(name, photoURL);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });

    if (customerState === "buyer") {
      fetch("https://resell-website-assignment-server-side.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(customers),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
    if (customerState === "seller") {
      fetch("https://resell-website-assignment-server-side.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sellerCustomer),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleRadioBtnChange = (event) => {
    setRadioSelected(event.target.value);
    return radioSelected;
  };

  return (
    <div className="min-h-[800px] grid lg:grid-cols-layout grid-cols-mobile_layout">
      <div>
        <img className="h-auto w-full" src={signup} alt="" />
      </div>
      <div className="flex flex-col lg:mx-24 mx-3 lg:mb-0 mb-3">
        <h2 className="font-syncopate text-center text-4xl font-bold text-blue-800 mt-20">
          Please SignUp
        </h2>
        <div className=" h-auto card lg:w-[500px] w-auto  border-2 shadow-xl pt-12 mt-10">
          <div className="card-body pt-0">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg font-medium text-gray-900">
                    Sign up as Buyer
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    value="buyer"
                    className="radio checked:bg-red-500"
                    checked={radioSelected === "buyer"}
                    onChange={handleRadioBtnChange}
                  />
                </label>
              </div>
              <div className="form-control mb-5">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg font-medium text-gray-900">
                    Sign up as Seller
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    value="seller"
                    className="radio checked:bg-blue-500"
                    checked={radioSelected === "seller"}
                    onChange={handleRadioBtnChange}
                  />
                </label>
              </div>
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
              <h2 className="text-base text-red-400 text-left font-medium ">
                {error}
              </h2>
            </div>
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
