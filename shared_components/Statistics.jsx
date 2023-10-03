import React from "react";

const Statistics = () => {
  const aboutStatistics = [
    { number: "500K+", desc: "Customer" },
    { number: "30K+", desc: "Client" },
    { number: "2500", desc: "Project" },
  ];
  return (
    <ul className="grid grid-cols-3 divide-x-4 divide-slate-200 relative bg-gradient-to-tl from-headers to-navactive via-bgservices rounded-lg mt-14 ">
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
  );
};

export default Statistics;
