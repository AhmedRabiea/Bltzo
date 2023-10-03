import React from "react";
import TechnologiesCards from "../shared_components/TechnologiesCards";

const Technologies = () => {
  return (
    <div className="container mx-auto mt-40">
      <div className="grid gap-20">
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="text-lg text-headers font-normal">
            MOBILE APP TECHNOLOGIES
          </h2>
          <h1 className="text-3xl font-bold">
            Our scope of <span className="text-headers">mobile app</span>{" "}
            development services
          </h1>
          <p className="text-txtparagraph font-normal text-sm">
            Mobile apps leverage a variety of technologies for their
            development. Front-end technologies like HTML5, CSS, and JavaScript
            <br />
            create engaging user interfaces. Back-end technologies such as
            Node.js, Ruby on Rails, and databases like MySQL ensure <br />{" "}
            smooth functionality, while cloud services like AWS or Google Cloud
            Platform offer scalability and hosting capabilities.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <TechnologiesCards />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
