import React from "react";
import KnowMoreBtn from "../shared/KnowMoreBtn";
import Statistics from "../shared/Statistics";

const About = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="grid md:grid-cols-2 gap-36">
        <div className="flex flex-col gap-16 md:px-0">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-left text-sm text-bltzo-400">ABOUT BLTZO</h3>
              <h1 className="text-3xl font-bold text-bltzo-200">
                Inception Design <span className="text-bltzo-400">System</span>
              </h1>
            </div>
            <p className="text-xl text-bltzo-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <Statistics />
          <div className="w-full md:w-1/2 flex items-center md:items-start justify-center md:justify-start">
            <KnowMoreBtn>Know More</KnowMoreBtn>
          </div>
        </div>
        <div className="">
          <img src="../assets/img/AboutSection.png" alt="about-bltzo" />
        </div>
      </div>
    </div>
  );
};

export default About;
