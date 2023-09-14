import React from "react";

const Ambitious = () => {
  return (
    <div className="flex flex-col bg-bgservices mt-28 items-center justify-center text-center py-32 rounded-lg gap-10">
      <h1 className="text-6xl font-bold">
        Created For Ambitious <br />
        Businesses
      </h1>
      <p className="text-txtparagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br />
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <div className="flex justify-center items-center gap-5">
        <button className="px-8 py-3 bg-navbtn text-white rounded-lg">
          Contact Us
        </button>
        <button className="px-8 py-3 bg-white text-headers rounded-lg">
          About Us
        </button>
      </div>
    </div>
  );
};

export default Ambitious;
