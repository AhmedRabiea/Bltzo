import React from "react";
import KnowMoreBtn from "./KnowMoreBtn";

const Services = () => {
  const services = [
    {
      icon: "../assets/img/nomore.svg",
      title: "No More Time Clocking",
      desc: "Purus faucibus ornare suspendisse nisi lacus sed viverra tellus",
    },
    {
      icon: "../assets/img/allinone.svg",
      title: "All-in-one",
      desc: "Nisi quis eleifend quam adipiscing proin sagittis. Tempus iaculis volutpat",
    },
    {
      icon: "../assets/img/shopfloor.svg",
      title: "Shop Floor Automation",
      desc: "Accumsan lacus vel facilisis volutpat velit egestas dui convallis aenean",
    },
    {
      icon: "../assets/img/realtime.svg",
      title: "Realtime Communication",
      desc: "Neque vitae tempus quam pellentesque nec nam aliquam sem",
    },
    {
      icon: "../assets/img/integrate.svg",
      title: "Integrate Quality Checks",
      desc: "Maecenas volutpat blandit aliquam etiam erat velit scelerisque",
    },
    {
      icon: "../assets/img/kpis.svg",
      title: "Great Reporting & KPIs",
      desc: "Vel orci porta non pulvinar laoreet suspendisse interdum",
    },
  ];
  return (
    <div className="flex flex-col gap-28 py-28 px-60  text-center mt-40 bg-bgservices rounded-3xl">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h3 className="text-lg text-headers font-normal uppercase">Services</h3>
        <h1 className="text-3xl font-bold text-txtcolor">
          Business <span className="text-headers">Key</span> Services
        </h1>
        <p className="text-txtparagraph">
          The dangerous world of a man who to have a neighbor just like end.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {services.map((service) => (
          <li className="list-none flex flex-col gap-3 justify-center items-center">
            <img src={service.icon} alt="bltzo-icon" />
            <h1>{service.title}</h1>
            <p>{service.desc}</p>
          </li>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <KnowMoreBtn>Know More</KnowMoreBtn>
      </div>
    </div>
  );
};

export default Services;
