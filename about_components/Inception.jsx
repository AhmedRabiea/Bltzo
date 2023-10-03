import Statistics from "@/shared_components/Statistics";
import React from "react";

const Inception = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-10 mt-20">
      <div className="lg:col-span-2">
        <img src="../assets/img/about/aboutbltzo.png" alt="about-bltzo" />
      </div>

      <div className="lg:col-span-3">
        <div className="flex flex-col gap-3 ">
          <h3 className="text-lg text-headers uppercase">ABOUT BLTZO</h3>
          <h1 className="text-2xl font-bold text-txtcolor">
            Inception Design <span className="text-headers">System</span>
          </h1>
          <p className="text-txtparagraph font-normal text-lg">
            US Bltzo Software Technologies. Established in 2018 to steer
            customers through the next generation of business innovation powered
            by technology with state-of-the-art business automation, software
            development and consultation services. Bltzo provides automation and
            solutions products. For companies operating in the information age
            we help to leverage new technologies to competitive advantage. We
            deliver high value innovative solutions by bridging the gap between
            business and technology. Since Bltzo inception, proven, demonstrated
            and invent unique products, techniques and capabilities that far and
            uniquely distinguish us from other software providers as we are
            specialized in developing various automated solutions.
          </p>
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default Inception;
