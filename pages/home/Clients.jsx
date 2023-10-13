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
    <div className="container mx-auto mt-32">
      <div className="grid gap-9">
        <div className="flex flex-col items-center gap-2 text-bltzo-600">
          <h2 className="text-2xl text-bltzo-400 font-normal">CLIENTS</h2>
          <h1 className="text-3xl font-bold font-[Poppins]">
            <span className="text-bltzo-400">Trusted</span> Clients
          </h1>
          <p className="text-bltzo-500 text-center md:text-start">
            The dangerous world of a man who to have a neighbor just like end.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-row text-4xl text-center items-center justify-center">
            <div className="bg-slate-300 relative w-10 h-10 rounded-full">
              <GoArrowLeft className="absolute left-3" />
            </div>
            <ul className="flex justify-center flex-wrap items-stretch gap-5 w-full">
              {clients.map((client, idx) => (
                <ClientsCards
                  key={idx}
                  client={client}
                  src={client.src}
                  alt={client.alt}
                />
              ))}
            </ul>
            <div className="bg-slate-300 relative w-10 h-10 rounded-full">
              <GoArrowRight className="absolute right-3" />
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-sm text-bltzo-100 underline"
          >
            View All
            <span>
              <IoIosArrowDown />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clients;
