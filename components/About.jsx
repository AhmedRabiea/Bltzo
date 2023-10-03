import React from "react";
import KnowMoreBtn from "./KnowMoreBtn";
import Statistics from "@/shared_components/Statistics";

const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:gap-36 md:mt-40 mt-24">
      <div className="flex flex-col gap-5 basis-1/2 px-5 md:px-0">
        <h3 className="text-left text-xl text-headers">ABOUT BLTZO</h3>
        <h1 className="text-3xl font-bold text-txtcolor">
          Inception Design <span className="text-headers">System</span>
        </h1>
        <p className="text-xl text-txtparagraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <Statistics />
        <div className="w-full md:w-1/2 mt-14 flex items-center md:items-start justify-center md:justify-start">
          <KnowMoreBtn>Know More</KnowMoreBtn>
        </div>
      </div>
      <div className="basis-1/2 px-5 md:px-0">
        <img src="../assets/img/AboutSection.png" alt="about-bltzo" />
      </div>
    </section>
  );
};

export default About;
