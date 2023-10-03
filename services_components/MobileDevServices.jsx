import React from "react";

const MobileDevServices = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="grid grid-cols-2 gap-48">
        <div className="grid gap-3">
          <h3 className="text-lg font-normal text-headers uppercase">
            MOBILE APP DEVELOPMENT SERVICES
          </h3>
          <h1 className="font-bold text-3xl">
            Exploring <span className="text-headers">Mobile App</span>
            <br />
            Development Services.
          </h1>
          <p className="text-txtparagraph font-normal">
            Mobile app development services refer to the creation of software
            applications that are designed to run on mobile devices, such as
            smartphones and tablets. The process of developing these apps
            generally involves creating a user interface and design, coding the
            logic of the app, testing the app, and then making it available for
            download through an App Store or Google Play.
          </p>
          <p className="text-txtparagraph font-normal mt-10">
            Mobile app solutions that deliver value to customers and elevate
            your brand
          </p>
        </div>
        <div className="relative">
          <img
            src="../assets/img/services/app-video.png"
            alt="mobile-development-services"
            className="w-full h-full"
          />
          <img
            src="../assets/img/services/play.png"
            alt="mobile-play"
            className="absolute top-1/2 right-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileDevServices;
