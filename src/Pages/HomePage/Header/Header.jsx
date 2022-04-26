import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="py-6 bg-[#021B29] text-white">
      <div className="px-[5%] flex justify-between items-center">
        <Link
          className="hidden md:block text-3xl font-semibold text-blue-500"
          to="/"
        >
          OneClink
        </Link>
        <nav className="flex gap-5">
          <Link className="text-xl hover:text-yellow-500" to="/">
            Home
          </Link>
          <Link className="text-xl hover:text-yellow-500" to="/">
            About
          </Link>
          <Link className="text-xl hover:text-yellow-500" to="/">
            Blog
          </Link>

          {user ? (
            <button
              className="text-xl text-yellow-500 hidden md:block hover:text-white  px-2 rounded"
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <div className="flex justify-center items-center gap-5">
              <Link className="text-xl hover:text-yellow-500" to="/login">
                Login
              </Link>
              <Link
                className="text-xl text-yellow-500 hidden md:block hover:text-white  px-2 rounded"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
