"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
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
    <div className="grid lg:grid-cols-2 mt-36 lg:gap-48 gap-10 md:mb-48">
      <div className="lg:col-span-1 items-center justify-center">
        <div className="flex flex-col gap-10">
          <h3 className="text-lg text-headers">ABOUT COMPANY</h3>
          <h1 className="text-2xl text-txtcolor ">
            A Community of <span className="text-headers">Business Owners</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div className="flex flex-col ">
            {communityItems.map((item, idx) => (
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <h1
                    className={clsx(
                      "text-lg text-[#444D69]",
                      currentIdx === idx ? "font-bold text-xl text-black" : ""
                    )}
                  >
                    {item.title}
                  </h1>
                  <div
                    onClick={() => setCurrentIdx(currentIdx === idx ? -1 : idx)}
                    className="cursor-pointer"
                  >
                    {currentIdx === idx ? <BiMinus /> : <BiPlus />}
                  </div>
                </div>
                <p
                  className={clsx(
                    "text-lg text-txtparagraph",
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
      <div className="lg:col-span-1">
        <img src="../assets/img/about/community.png" alt="about-bltzo" />
      </div>
    </div>
  );
};

export default Community;
