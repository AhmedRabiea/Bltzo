"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { PiDotOutlineFill } from "react-icons/pi";

const WebTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const teamMembers = [
    {
      title: "UI designer",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
    {
      title: "UX designers",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
    {
      title: "Frontend developers",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
    {
      title: "Backend developers",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
    {
      title: "DevOps engineers",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
    {
      title: "QA specialists",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
    {
      title: "Project Manager",
      desc: "designers make sure that all the visual and interactive aspects of an app are easy to understand, practical, and efficient at retaining users’ attention.",
    },
  ];
  return (
    <div className="container mx-auto mt-40">
      <div className="grid grid-cols-2 gap-28">
        <div>
          <img src="../assets/img/services/web-team.png" alt="" />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-normal uppercase text-bltzo-400">
              WEB TEAM
            </h2>
            <h1 className="text-3xl font-bold text-bltzo-200">
              Web Development Team
            </h1>
            <p className="text-sm font-normal text-bltzo-500">
              Team composition depends on the project’s needs. Every team member
              is
              <br /> carefully selected, ensuring they provide meaningful value
              in building your
              <br /> product. We have the expertise to deliver all aspects of
              web development.
            </p>
          </div>
          <div className="flex flex-col gap-10 max-h-[400px] overflow-y-scroll">
            {teamMembers.map((member, idx) => (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                  <div className="flex gap-5 items-center">
                    <span
                      className={clsx(
                        "p-2 bg-slate-100 font-semibold rounded-md",
                        currentIndex === idx
                          ? "text-bltzo-400"
                          : "text-slate-400"
                      )}
                    >
                      <PiDotOutlineFill />
                    </span>
                    <h1
                      className={clsx(
                        "font-normal text-lg",
                        currentIndex === idx
                          ? "font-semibold text-black"
                          : "text-bltzo-450"
                      )}
                    >
                      {member.title}
                    </h1>
                  </div>
                  <div
                    onClick={() =>
                      setCurrentIndex(currentIndex === idx ? -1 : idx)
                    }
                    className="cursor-pointer"
                  >
                    {currentIndex === idx ? <BiMinus /> : <BiPlus />}
                  </div>
                </div>
                {currentIndex === idx && (
                  <div className="text-bltzo-500 text-sm font-normal pl-14">
                    <p>{member.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebTeam;
