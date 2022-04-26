import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../Firebase/firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();

  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let errorText;
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserLoginData({ ...userLoginData, [name]: value });
    e.preventDefault();
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // condition
  if (user) {
    navigate("/checkout");
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (error) {
    errorText = <p className="text-red-600">Error: {error?.message}</p>;
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userLoginData;
    signInWithEmailAndPassword(email, password);
  };

  //   reste  password
  const resetPassword = async () => {
    const { email } = userLoginData;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("We sent a Reset email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <>
      {!user ? (
        <div className="flex justify-center items-center my-10 ">
          <div className="lg:w-2/5 md:w-1/2 w-full px-5 md:px-0">
            <form
              onSubmit={handleLoginFormSubmit}
              className="bg-white p-10 rounded-lg shadow-lg min-w-full"
            >
              <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                Login
              </h1>

              <div>
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="text"
                  name="email"
                  id="email"
                  value={userLoginData.email}
                  placeholder="Enter your email"
                  onChange={getUserData}
                  required
                />
              </div>
              <div>
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="password"
                  name="password"
                  value={userLoginData.password}
                  id="password"
                  placeholder="password"
                  onChange={getUserData}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
              >
                Login
              </button>
              <div className="lg:flex justify-between mt-4 items-center">
                <p className="text-xl lg:mb-0 mb-3 ">
                  <span>
                    New meber?
                    <Link className="text-blue-500" to="/register">
                      {" "}
                      Register
                    </Link>{" "}
                    here.
                  </span>
                </p>
                <p className="text-xl">
                  Forget Password?{" "}
                  <button className="text-blue-500" onClick={resetPassword}>
                    Reset
                  </button>{" "}
                  here.
                </p>
              </div>
              {/* other signin in method  */}
              <div className="mt-3 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or, login with
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      signInWithGoogle();
                    }}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Signin with Google</span>
                  </button>
                </div>
              </div>
            </form>
            {errorText}
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div>
          <h1 className="mt-10 text-3xl text-blue-500">Already Login</h1>
        </div>
      )}
    </>
  );
};

export default Login;
