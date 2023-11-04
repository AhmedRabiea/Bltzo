import React from "react";
import KnowMoreBtn from "../shared/KnowMoreBtn";

const Ambitious = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-col bg-bltzo-950 items-center justify-center text-center px-5 md:px-0 md:py-32 py-16 rounded-lg gap-10">
        <h1 className="text-2xl md:text-6xl font-bold">
          Created For Ambitious <br />
          Businesses
        </h1>
        <p className="text-bltzo-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <KnowMoreBtn className="">Contact Us</KnowMoreBtn>
          <button className="px-8 py-3 bg-white text-bltzo-400 rounded-lg">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ambitious;
