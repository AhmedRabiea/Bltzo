import React from "react";
import ClientsCards from "./ClientsCards";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Clients = () => {
  const clients = [
    { src: "../assets/img/insights-software.svg", alt: "insights-software" },
    { src: "../assets/img/agile-software.svg", alt: "agile-software" },
    { src: "../assets/img/google.svg", alt: "google" },
    { src: "../assets/img/invio.svg", alt: "invio" },
    { src: "../assets/img/lenovo-logo.svg", alt: "lenovo-logo" },
    { src: "../assets/img/lexmark.svg", alt: "lexmark" },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-2 text-txtcolor">
        <h2 className="text-2xl text-headers font-normal">CLIENTS</h2>
        <h1 className="text-3xl font-bold font-[Poppins]">
          <span className="text-headers">Trusted</span> Clients
        </h1>
        <p className="text-txtparagraph">
          The dangerous world of a man who to have a neighbor just like end.
        </p>
      </div>
      <div className="flex flex-row text-4xl text-center items-center justify-center mt-11">
        <div className="bg-slate-300 relative w-10 h-10 rounded-3xl">
          <GoArrowLeft className="absolute left-4" />
        </div>
        <ul className="flex justify-center flex-nowrap items-stretch gap-5 w-full">
          {clients.map((client, idx) => (
            <ClientsCards
              key={idx}
              client={client}
              src={client.src}
              alt={client.alt}
            />
          ))}
        </ul>
        <div className="bg-slate-300 relative w-10 h-10 rounded-3xl">
          <GoArrowRight className="absolute right-4" />
        </div>
      </div>
      <Link
        href="/"
        className="flex items-center justify-center gap-2 mt-16 text-lg text-navactive underline"
      >
        View All
        <span>
          <IoIosArrowDown />
        </span>
      </Link>
    </div>
  );
};

export default Clients;
