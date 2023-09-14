import React from "react";
import KnowMoreBtn from "./KnowMoreBtn";

const Advantages = () => {
  return (
    <section className="flex items-center justify-between mt-20 w-full gap-28">
      <div className="basis-1/2">
        <div className="bg-slate-200 h-full z-20"></div>
        <img
          src="assets/img/advatages.png"
          alt="bltzo-advatages"
          className="z-10"
        />
      </div>
      <div className="basis-1/2 flex flex-col gap-2">
        <h3 className="uppercase text-lg text-headers">
          WHY BLTZO? OUR ADVANTAGES
        </h3>
        <h1 className="text-txtcolor text-3xl font-bold font-[Poppins]">
          It's time to
          <span className="text-headers"> make your</span> <br />
          <span className="text-headers">software</span> online now!
        </h1>
        <p className="text-txtparagraph font-normal mt-5">
          Our strengths: We create applications that help businesses <br />
          thrive in a fast-changing economy, with a focus on security, <br />
          reliability, and scalability
        </p>
        <p className="text-txtparagraph font-normal mt-5">
          Client satisfaction: We listen carefully to our clients 'needs and
          <br />
          work efficiently to deliver solutions that meet their requirements,
          <br />
          while minimizing the time it takes to bring them to market.
        </p>
        <div className="w-1/2 mt-10">
          <KnowMoreBtn>Know More</KnowMoreBtn>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
