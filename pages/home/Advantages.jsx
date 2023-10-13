import React from "react";
import KnowMoreBtn from "../shared/KnowMoreBtn";

const Advantages = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="grid grid-cols-2 gap-28">
        <div className="bg-bltzo-900 rounded-tr-md rounded-br-md relative">
          <div className="absolute h-full w-full flex top-0">
            <img
              src="assets/img/play.png"
              alt="bltzo-play"
              className="m-auto"
            />
          </div>
          <img src="assets/img/advatages.png" alt="bltzo-advatages" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="uppercase text-sm text-bltzo-400">
            WHY BLTZO? OUR ADVANTAGES
          </h3>
          <h1 className="text-bltzo-200 text-3xl font-bold font-[Poppins]">
            It's time to
            <span className="text-bltzo-400"> make your</span> <br />
            <span className="text-bltzo-400">software</span> online now!
          </h1>
          <p className="text-bltzo-500 font-normal mt-5">
            Our strengths: We create applications that help businesses <br />
            thrive in a fast-changing economy, with a focus on security, <br />
            reliability, and scalability
          </p>
          <p className="text-bltzo-500 font-normal mt-5">
            Client satisfaction: We listen carefully to our clients 'needs and
            <br />
            work efficiently to deliver solutions that meet their requirements,
            <br />
            while minimizing the time it takes to bring them to market.
          </p>
          <div className="w-full md:w-1/2 mt-10 flex items-center md:items-start justify-center md:justify-start">
            <KnowMoreBtn>Know More</KnowMoreBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
