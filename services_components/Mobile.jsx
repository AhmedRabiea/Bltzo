import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";

const Mobile = () => {
  const devServices = [
    {
      icon: <BiSolidCheckCircle />,
      desc: "Product Discovery & Product Research",
    },
    { icon: <BiSolidCheckCircle />, desc: "UX Design, UI Design & Branding" },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Native Mobile App Development (Android or iOS)",
    },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Cross-Platform Mobile App Development",
    },
    { icon: <BiSolidCheckCircle />, desc: "Preparing a Go-To-Market Strategy" },
    { icon: <BiSolidCheckCircle />, desc: "QA Advisory & Consulting" },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Providing Customer Insights & Behavior Analytics",
    },
    { icon: <BiSolidCheckCircle />, desc: "Maintenance & Support" },
  ];
  return (
    <div className="container mx-auto mt-24">
      <div className="grid gap-28 items-center">
        <div className="flex flex-col gap-3  text-center">
          <h1 className="text-lg text-headers">BLTZO MOBILE SERVICES</h1>
          <h1 className="text-3xl font-bold">
            Our scope of <span className="text-headers">mobile app</span>{" "}
            development services
          </h1>
          <p className="text-servicesp">
            At BLTZO, we know that every detail of the development process is
            crucial, and so we’ve built the expertise to provide a <br /> full
            range of mobile app development services. We can be responsible for
            design, coding, management, or <br />
            integration, but we can also develop your product from scratch into
            a fully functioning application.
          </p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-28">
            <div>
              <img
                src="../assets/img/services/mobileservices.png"
                alt="bltzo-mobileServices"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold ">
                Tailored Mobile App Development Services for Start-ups &
                Enterprises
              </h1>
              <p className="text-lg font-normal text-servicesp">
                Regardless if you're a start-up or a big enterprise, we'll
                adjust to your needs and create a beautiful digital product that
                meets your expectations. Here are some of the mobile app
                development services that we offer:
              </p>
              <ul className="list-none flex flex-col gap-3">
                {devServices.map((service, idx) => (
                  <li className="flex gap-2 items-center">
                    <span className="text-2xl text-navbtn">{service.icon}</span>
                    <h1 className="text-lg font-normal font-[Poppins] text-black">
                      {service.desc}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
