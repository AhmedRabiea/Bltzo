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
    <div className="container mx-auto mt-16">
      <div className="grid gap-20 items-center">
        <div className="flex flex-col gap-3 text-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-normal text-bltzo-400">
              BLTZO WEB DEVELOPMENT
            </h2>
            <h1 className="text-3xl font-bold">
              What are <span className="text-bltzo-400">web development</span>{" "}
              services?
            </h1>
          </div>
          <p className="text-sm font-normal text-bltzo-500">
            Web development encompasses a wide range of services, which include
            delivering websites or web apps <br />, cybersecurity solutions,
            UX/UI design, eCommerce solutions, website architectures, QA
            testing, maintenance, consulting,
            <br /> and even a custom CMS.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-24">
          <div>
            <img
              src="../assets/img/services/web-identification.png"
              alt="bltzo-web-services"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-bltzo-200">
                Achieve your business goals with <br />
                web development solutions
              </h1>
              <p className="text-bltzo-500 text-normal text-sm">
                Our battle-tested developers specialize in a wide range of web
                <br />
                development services. Here are some of the solutions that we can
                <br />
                deliver for you.
              </p>
            </div>
            <ul className="list-none flex flex-col gap-5">
              {webServices.map((service, idx) => (
                <li className="flex items-center gap-2">
                  <span className="text-2xl text-bltzo-100">
                    {service.icon}
                  </span>
                  <h1 className="text-base font-medium text-black">
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
