import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import KnowMoreBtn from "../shared/KnowMoreBtn";

const Team = () => {
  const teamMembers = [
    {
      img: "../assets/img/daruis.png",
      name: "Darius Gerlach",
      desc: "Tortor condimentum lacinia quis vel eros donec. Turpis egestas sed tempus urna",
    },
    {
      img: "../assets/img/moshe.png",
      name: "Moshe Heaney",
      desc: "Pulvinar neque laoreet suspendisse interdum consectetur liberoa",
    },
    {
      img: "../assets/img/george.png",
      name: "Gregoria Schmeler",
      desc: "Nulla facilisi morbi tempus iaculis. Etiam tempor orci eu lobortis elementum",
    },
    {
      img: "../assets/img/franco.png",
      name: "Franco Jacobi",
      desc: "Consectetur adipiscing elit pellentesque habitant morbi tristique senectus",
    },
  ];
  return (
    <div className="container mx-auto mt-36">
      <div className="grid gap-24">
        <div className="flex flex-col gap-3 items-center md:items-start justify-center md:justify-start text-center md:text-start">
          <h3 className="text-sm text-bltzo-400 font-normal">MEET OUR TEAM</h3>
          <h1 className="text-3xl text-bltzo-200 font-bold">
            Community{" "}
            <span className="text-bltzo-400">Support & Moderation </span>
            Team
          </h1>
          <p className="text-bltzo-500">
            The dangerous world of a man who to have a neighbor just like end.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="bg-slate-300 relative w-10 h-10 rounded-full text-3xl items-center justify-center flex">
            <GoArrowLeft className="absolute left-0" />
          </div>
          {teamMembers.map((member) => (
            <div className="flex flex-col flex-grow gap-3 items-center justify-center text-center basis-1/4">
              <img src={member.img} alt="bltzo-team" />
              <span className="font-bold text-2xl text-bltzo-200">
                {member.name}
              </span>
              <p className="font-normal text-lg text-bltzo-500">
                {member.desc}
              </p>
            </div>
          ))}
          <div className="bg-slate-300 relative w-10 h-10 rounded-full text-3xl flex items-center justify-center">
            <GoArrowRight className="absolute right-0" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <KnowMoreBtn>Know More</KnowMoreBtn>
        </div>
      </div>
    </div>
  );
};

export default Team;
