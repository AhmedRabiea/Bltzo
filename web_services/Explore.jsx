import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";

const Explore = () => {
  const services = [
    {
      icon: <BiSolidCheckCircle />,
      title: "Websites",
      desc: "A well-designed website is a powerful marketing and communication tool that helps build trust and generate leads.",
    },
    {
      icon: <BiSolidCheckCircle />,
      title: "Ecommerce",
      desc: "With eCommerce solutions, businesses can operate 24 hours a day, 7 days a week, and reach customers in any time zone.",
    },
    {
      icon: <BiSolidCheckCircle />,
      title: "Web Applications",
      desc: "Web applications can reach a global audience. They're interactive and engaging, so can easily hold users' attention.",
    },
    {
      icon: <BiSolidCheckCircle />,
      title: "Content Management System",
      desc: "A dedicated CMS designed to the specific needs of your business will save time and money by optimizing internal workflows.",
    },
  ];
  return (
    <div className="container mx-auto mt-44">
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-normal text-green uppercase">
            MOBILE APP DEVELOPMENT SERVICES
          </h2>
          <h1 className="font-bold text-4xl">
            Exploring{" "}
            <span className="text-headers">
              Web <br /> Development
            </span>{" "}
            Services.
          </h1>
          <p className="font-normal text-txtparagraph">
            Our battle-tested developers specialize in a wide range of web
            development services. Here are some of the solutions that we can
            deliver for you.
          </p>
          <div className="flex flex-col gap-10 list-none pt-10">
            {services.slice(0, 3).map((service, idx) => (
              <div className="flex gap-3">
                <span className="text-2xl text-navbtn">{service.icon}</span>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="font-normal text-txtparagraph">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="relative">
            <img
              src="../assets/img/services/play.png"
              alt="bltzo-web-development"
              className="absolute top-1/2 right-1/2"
            />
            <img
              src="../assets/img/services/explore.png"
              alt="bltzo-web-development"
            />
          </div>
          {services.slice(3).map((service, idx) => (
            <div className="flex gap-3">
              <span className="text-2xl text-navbtn">{service.icon}</span>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">{service.title}</h1>
                <p className="font-normal text-txtparagraph">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
