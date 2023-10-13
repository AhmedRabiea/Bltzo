"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { PiDotOutlineFill } from "react-icons/pi";
const Community = () => {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const communityItems = [
    {
      title: "Mission",
      desc: "We envision to be the pioneering software development firm in the state that delivers high-quality service. Along with our high-end resources, we see to it that we can create a beneficial impact on our clients, and make that opportunity as an avenue for them and our company to grow. Qualifications Bltzo is powered by highly skilled professionals of engineers, developers, and executives equipped with the latest managerial and IT tools and works round-the-clock to assure the timely delivery of your applications with the highest quality.",
    },
    {
      title: "Vission",
      desc: "We envision to be the pioneering software development firm in the state that delivers high-quality service. Along with our high-end resources, we see to it that we can create a beneficial impact on our clients, and make that opportunity as an avenue for them and our company to grow. Qualifications Bltzo is powered by highly skilled professionals of engineers, developers, and executives equipped with the latest managerial and IT tools and works round-the-clock to assure the timely delivery of your applications with the highest quality.",
    },
    {
      title: "Core Values",
      desc: "We envision to be the pioneering software development firm in the state that delivers high-quality service. Along with our high-end resources, we see to it that we can create a beneficial impact on our clients, and make that opportunity as an avenue for them and our company to grow. Qualifications Bltzo is powered by highly skilled professionals of engineers, developers, and executives equipped with the latest managerial and IT tools and works round-the-clock to assure the timely delivery of your applications with the highest quality.",
    },
  ];
  return (
    <div className="container mx-auto mt-36">
      <div className="grid lg:grid-cols-2 lg:gap-48 gap-10">
        <div className="">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm text-bltzo-400 font-normal">
                ABOUT COMPANY
              </h3>
              <h1 className="text-3xl text-bltzo-200 font-bold">
                A Community of{" "}
                <span className="text-bltzo-400">Business Owners</span>
              </h1>
              <p className="font-normal text-sm text-bltzo-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {communityItems.map((item, idx) => (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-5">
                      <span
                        className={clsx(
                          "p-2 text-lg font-semibold bg-slate-100 rounded-md",
                          currentIdx === idx
                            ? "text-bltzo-400"
                            : "text-slate-400"
                        )}
                      >
                        <PiDotOutlineFill />
                      </span>
                      <h1
                        className={clsx(
                          "text-lg text-bltzo-450",
                          currentIdx === idx
                            ? "font-semibold text-xl text-black"
                            : ""
                        )}
                      >
                        {item.title}
                      </h1>
                    </div>
                    <div
                      onClick={() =>
                        setCurrentIdx(currentIdx === idx ? -1 : idx)
                      }
                      className="cursor-pointer"
                    >
                      {currentIdx === idx ? <BiMinus /> : <BiPlus />}
                    </div>
                  </div>
                  <p
                    className={clsx(
                      "text-lg text-bltzo-500",
                      currentIdx === idx ? "flex" : "hidden"
                    )}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <img src="../assets/img/about/community.png" alt="about-bltzo" />
        </div>
      </div>
    </div>
  );
};

export default Community;
