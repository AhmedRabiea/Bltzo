import Link from "next/link";
import React from "react";
import KnowMoreBtn from "./KnowMoreBtn";

const About = () => {
  const aboutStatistics = [
    { number: "500K+", desc: "Customer" },
    { number: "30K+", desc: "Client" },
    { number: "2500", desc: "Project" },
  ];
  return (
    <section className="flex justify-between gap-36 mt-40">
      <div className="flex flex-col gap-5 basis-1/2">
        <h3 className="text-left text-xl text-headers">ABOUT BLTZO</h3>
        <h1 className="text-3xl font-bold text-txtcolor">
          Inception Design <span className="text-headers">System</span>
        </h1>
        <p className="text-xl text-txtparagraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <ul className="grid grid-cols-3 divide-x-4 divide-slate-200 relative bg-gradient-to-tl from-headers to-navactive via-bgservices rounded-lg mt-14">
          {aboutStatistics.map((item, idx) => (
            <li
              key={idx}
              className="py-6 flex flex-col items-center justify-center"
            >
              <h1 className="text-3xl font-bold">{item.number}</h1>
              <p className="text-lg font-normal text-[#0B4A63]">{item.desc}</p>
            </li>
          ))}
          <div className="absolute -top-2 -left-2 w-9 h-8 bg-navbtn rounded-tl-xl"></div>
          <div className="absolute -bottom-2 -right-2 w-9 h-8 bg-headers rounded-br-xl"></div>
        </ul>
        <div className="w-1/2 mt-14">
          <KnowMoreBtn>Know More</KnowMoreBtn>
        </div>
      </div>
      <div className="basis-1/2">
        <img src="../assets/img/AboutSection.png" alt="about-bltzo" />
      </div>
    </section>
  );
};

export default About;
