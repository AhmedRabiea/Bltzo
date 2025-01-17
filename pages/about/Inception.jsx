import React from "react";
import Statistics from "../shared/Statistics";

const Inception = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="grid md:grid-cols-2">
        <div className="">
          <img src="../assets/img/about/aboutbltzo.png" alt="about-bltzo" />
        </div>

        <div className="">
          <div className="flex flex-col gap-5">
            <h3 className="text-sm text-bltzo-400 uppercase">ABOUT BLTZO</h3>
            <h1 className="text-3xl font-bold text-bltzo-200">
              Inception Design <span className="text-bltzo-400">System</span>
            </h1>
            <p className="text-bltzo-500 font-normal text-sm">
              US Bltzo Software Technologies. Established in 2018 to steer
              customers through the next generation of business innovation
              powered by technology with state-of-the-art business automation,
              software development and consultation services. Bltzo provides
              automation and solutions products. For companies operating in the
              information age we help to leverage new technologies to
              competitive advantage. We deliver high value innovative solutions
              by bridging the gap between business and technology. Since Bltzo
              inception, proven, demonstrated and invent unique products,
              techniques and capabilities that far and uniquely distinguish us
              from other software providers as we are specialized in developing
              various automated solutions.
            </p>
          </div>
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Inception;
