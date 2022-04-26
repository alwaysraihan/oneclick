import React from "react";
import image1 from "../../../assets/images/photo-3.jpg";
const Banner = () => {
  return (
    <div className="min-h-[40vh] md:grid grid-cols-2 items-center justify-center mb-5">
      <div className="flex justify-center bg-[#082739] w-full h-full px-5 py-5 md:px[10%] lg:px-[15%] text-white flex-col">
        <h1 className="text-2xl md:text-4xl text-left lg:text-5xl font-semibold ">
          Hi, I'm Tasfia.
        </h1>
        <p className="text-[#C0C0C0] md:mt-3 text-left lg:mt-5 mt-2">
          I approach photography with a romantic, impressionist sensibility.
          Over the past decade, I have had the pleasure of documenting some of
          the most iconic and exclusive celebrations for discerning patrons in
          over twenty countries and six continents.
        </p>
        <div className="hidden md:block">
          <div className="mt-5 xl:mt-7 flex justify-start items-center gap-5">
            <button className="px-5 py-3 border-2 border-white hover:border-yellow-500 hover:text-yellow-400">
              Hire Me
            </button>
            <button className="px-5 py-3 border-2 border-white hover:border-yellow-500 hover:text-yellow-400">
              Portfolio
            </button>
            <button className="px-5 py-3 border-2 border-white hover:border-yellow-500 hover:text-yellow-400">
              Live Chat
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block h-full">
        <img className="w-full h-full" src={image1} alt="photographer" />
      </div>
    </div>
  );
};

export default Banner;
