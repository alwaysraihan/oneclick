import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-5 bg-[#021B29]">
      <h1 className="text-xl text-white">
        Copyright{" "}
        <span className="text-blue-500">
          <Link to="/">OneClick</Link>
        </span>{" "}
        2022
      </h1>
    </footer>
  );
};

export default Footer;
