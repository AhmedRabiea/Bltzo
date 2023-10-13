import TechnologiesCards from "@/pages/shared/TechnologiesCards";
import React from "react";

const Technologies = () => {
  return (
    <div className="container mx-auto mt-48">
      <div className="grid gap-3">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm text-bltzo-400 font-normal uppercase">
              WEB DEVELOPMENT TECHNOLOGIES
            </h2>
            <h1 className="text-3xl font-bold">
              Our scope of{" "}
              <span className="text-bltzo-400">web development</span> services
            </h1>
          </div>
          <p className="font-normal text-bltzo-500 text-sm">
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
