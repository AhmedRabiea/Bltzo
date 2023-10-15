import React from "react";

const Attract = () => {
  return (
    <div className="container mx-auto mt-11">
      <div className="grid gap-20">
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-normal text-bltzo-400 uppercase">
              BLTZO WEB DEVELOPMENT
            </h2>
            <h1 className="text-bold text-3xl text-bltzo-200">
              Attract and retain users with exceptional{" "}
              <span className="text-bltzo-400">product design</span>
            </h1>
          </div>
          <div>
            <p className="text-sm font-normal text-bltzo-500">
              Successful products are not only visually appealing, but also
              highly tailored towards user needs.
              <br /> With the right design tools, methodologies, and a
              human-centered approach, you can build
              <br />
              products that your customers will love to use.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24">
          <div>
            <img src="../assets/img/services/attract.png" alt="bltzo-attract" />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl text-bltzo-200 font-bold">
                Attract and retain users with
                <br /> exceptional product design
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-normal text-bltzo-500 text-sm">
                Successful products are not only visually appealing, but also
                highly
                <br /> tailored towards user needs. With the right design tools,
                <br />
                methodologies, and a human-centered approach, you can build
                <br />
                products that your customers will love to use.
              </p>
              <p className="font-normal text-bltzo-500 text-sm">
                Designing for clients like UBS, Keller Williams, or OLX, we know
                how to make <br /> your product stand out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attract;
