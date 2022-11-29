import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/login/login2.jpg";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //google Sign in
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const customers = {
          name: user.displayName,
          email: user.email,
          customerState: "buyer",
        };
        //send customer info to database
        fetch("http://localhost:5000/users", {
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //sign in with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="min-h-[800px] grid lg:grid-cols-layout grid-cols-mobile_layout">
      <div>
        <img className="h-auto w-full" src={login} alt="" />
      </div>
      <div className="flex flex-col lg:mx-24 mx-3 lg:mb-0 mb-5">
        <h2 className="font-syncopate text-center text-4xl font-bold text-blue-800 mt-20">
          Please Login
        </h2>
        <div className=" h-auto card lg:w-[500px] w-auto  border-2 shadow-xl pt-12 mt-10">
          <div className="card-body pt-0">
            <form onSubmit={handleLogin} className="flex flex-col">
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
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
                <label className="block mb-2 text-base font-medium text-gray-900">
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
                  {error}
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
              <button
                onClick={handleGoogleSignIn}
                className="btn my-3 w-full bg-transparent border-2 border-primary text-gray-800 hover:text-white hover:bg-primary hover:border-2"
              >
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
