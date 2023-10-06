import Link from "next/link";
import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

const Slider = () => {
  return (
    <div className="container  mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
          <h1 className="text-3xl md:text-6xl font-bold capitalize">
            ORGANIZE YOUR <br />
            BUSINESS
            <br />
            <span className="text-green">WITH BLTZO</span>
          </h1>
          <p className="text-lg text-txtparagraph font-light my-3 text-center md:text-start">
            Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.
            Donec ac odio tempor orci dapibus. Pulvinar etiam non quam lacus
            suspendisse faucibus
          </p>
          <div className="flex flex-col md:flex-row items-center mt-14 gap-7">
            <button className="rounded-md px-6 py-2 bg-navactive text-white">
              Estimate Your Project
            </button>
            <Link
              href="/estimate"
              className="text-navactive flex gap-2 items-center"
            >
              Discover Your Options
              <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src="../assets/img/slider.png"
            alt="slider-bltzo"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
