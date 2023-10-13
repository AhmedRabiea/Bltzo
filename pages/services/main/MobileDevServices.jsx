import React from "react";

const MobileDevServices = () => {
  return (
    <div className="container mx-auto mt-48">
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-normal text-bltzo-400 uppercase">
              MOBILE APP DEVELOPMENT SERVICES
            </h3>
            <h1 className="font-bold text-3xl text-bltzo-200">
              Exploring <span className="text-bltzo-400">Mobile App</span>
              <br />
              Development Services.
            </h1>
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-bltzo-500 font-normal">
              Mobile app development services refer to the creation of software
              applications that are designed to run on mobile devices, such as
              smartphones and tablets. The process of developing these apps
              generally involves creating a user interface and design, coding
              the logic of the app, testing the app, and then making it
              available for download through an App Store or Google Play.
            </p>
            <p className="text-bltzo-500 font-normal">
              Mobile app solutions that deliver value to customers and elevate
              <br />
              your brand
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="../assets/img/services/app-video.png"
            alt="mobile-development-services"
            className="w-full h-full"
          />
          <div className="absolute top-0 w-full h-full flex">
            <img
              className="m-auto"
              src="../assets/img/services/play.png"
              alt="mobile-play"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevServices;
