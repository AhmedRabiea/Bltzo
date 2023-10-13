import TechnologiesCards from "@/shared_components/TechnologiesCards";
import React from "react";

const Technologies = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="grid gap-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-lg text-headers font-normal uppercase">
            WEB DEVELOPMENT TECHNOLOGIES
          </h2>
          <h1 className="text-4xl font-bold">
            Our scope of <span className="text-headers">web development</span>{" "}
            services
          </h1>
          <p className="font-normal text-txtparagraph">
            Mobile apps leverage a variety of technologies for their
            development. Front-end technologies like HTML5, CSS, and JavaScript{" "}
            <br />
            create engaging user interfaces. Back-end technologies such as
            Node.js, Ruby on Rails, and databases like MySQL ensure
            <br /> smooth functionality, while cloud services like AWS or Google
            Cloud Platform offer scalability and hosting capabilities.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <TechnologiesCards />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
