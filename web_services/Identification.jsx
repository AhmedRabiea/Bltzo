import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";

const Identification = () => {
  const webServices = [
    {
      icon: <BiSolidCheckCircle />,
      desc: "Website Development",
    },
    { icon: <BiSolidCheckCircle />, desc: "Web Application Development" },
    {
      icon: <BiSolidCheckCircle />,
      desc: "E-Commerce Solutions Development",
    },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Dedicated Content Management System Development",
    },
    {
      icon: <BiSolidCheckCircle />,
      desc: "No-code Development & Low-code Development",
    },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Ideation - Market Research - Wireframing - Prototyping",
    },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Cybersecurity, Consulting, Publishing, Maintenance, & Support",
    },
    {
      icon: <BiSolidCheckCircle />,
      desc: "Project Management, UI Design, UX Design, Coding, QA Testing",
    },
  ];
  return (
    <div className="container mx-auto mt-24">
      <div className="grid gap-28 items-center">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-lg text-headers">BLTZO WEB DEVELOPMENT</h2>
          <h1 className="text-4xl font-bold ">
            What are <span className="text-headers">web development</span>{" "}
            services?
          </h1>
          <p className="text-noraml text-txtparagraph">
            Web development encompasses a wide range of services, which include
            delivering websites or web apps <br />, cybersecurity solutions,
            UX/UI design, eCommerce solutions, website architectures, QA
            testing, maintenance, consulting,
            <br /> and even a custom CMS.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-28">
          <div>
            <img
              src="../assets/img/services/web-identification.png"
              alt="bltzo-web-services"
            />
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold">
              Achieve your business goals with web development solutions
            </h1>
            <p className="font-normal text-txtparagraph">
              Our battle-tested developers specialize in a wide range of web
              development services. Here are some of the solutions that we can
              deliver for you.
            </p>
            <ul className="list-none flex flex-col gap-3">
              {webServices.map((service, idx) => (
                <li className="flex items-center gap-2">
                  <span className="text-2xl text-navbtn">{service.icon}</span>
                  <h1 className="text-lg font-bold text-black">
                    {service.desc}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identification;
