import React from "react";

const Technologies = () => {
  return (
    <div className="container mx-auto mt-44">
      <div className="grid gap-12">
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-normal text-bltzo-400 uppercase">
              PRODUCT DESIGN TECHNOLOGIES
            </h2>
            <h1 className="text-bold text-3xl text-bltzo-200">
              Our scope of{" "}
              <span className="text-bltzo-400">Product Design</span>Services
            </h1>
          </div>
          <div>
            <p className="text-sm font-normal text-bltzo-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>
        </div>
        <div className="flex gap-14 items-center justify-center object-contain">
          <img
            src="../assets/img/services/figma.png"
            alt="bltzo-technologies"
            className="w-20 h-9 "
          />
          <img
            src="../assets/img/services/xd.png"
            alt="bltzo-technologies"
            className="w-9 h-9 "
          />
          <img
            src="../assets/img/services/css.png"
            alt="bltzo-technologies"
            className="w-24 h-9 "
          />
          <img
            src="../assets/img/services/js.png"
            alt="bltzo-technologies"
            className="w-8 h-9 "
          />
          <img
            src="../assets/img/services/html.png"
            alt="bltzo-technologies"
            className="w-28 h-9 "
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
