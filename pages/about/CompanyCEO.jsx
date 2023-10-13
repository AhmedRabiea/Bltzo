import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CompanyCEO = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="grid gap-20">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-sm text-bltzo-400 font-normal uppercase">
            MEET OUR TEAM
          </h2>
          <h1 className="text-3xl text-bltzo-200 font-bold">
            Community{" "}
            <span className="text-bltzo-400 ">Support & Moderation</span> Team
          </h1>
          <p className="text-lg text-bltzo-500">
            The dangerous world of a man who to have a neighbor just like end.
          </p>
        </div>
        <div className="flex-1">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="">
              <img src="../assets/img/about/ceo.png" alt="bltzo-ceo" />
            </div>
            <div className="flex flex-col gap-14 bg-[#F1F1F6] px-10 rounded-2xl">
              <div className="flex flex-col gap-7">
                <h1 className="text-3xl font-bold text-bltzo-100 pt-14">
                  Company CEO
                </h1>
                <p className="text-bltzo-500 text-lg">
                  “Sollicitudin nibh sit amLorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </p>
              </div>
              <h1 className="text-3xl font-bold text-bltzo-100 pt-10">
                Alice Lynch
              </h1>
              <div className="flex gap-7 items-end justify-end text-4xl">
                <span className="bg-slate-200 rounded-full ">
                  <GoArrowLeft className="" />
                </span>
                <span className="bg-black text-white rounded-full ">
                  <GoArrowRight className="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCEO;
