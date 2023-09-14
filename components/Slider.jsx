import Link from "next/link";
import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

const Slider = () => {
  return (
    <div className="w-full h-screen">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold font-[Poppins] capitalize">
            ORGANIZE YOUR <br />
            BUSINESS
            <br />
            <span className="text-headers">WITH BLTZO</span>
          </h1>
          <p className="text-lg text-txtparagraph font-normal font-[Poppins] my-3">
            Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.
            Donec ac odio tempor orci dapibus. Pulvinar etiam non quam lacus
            suspendisse faucibus
          </p>
          <div className="flex items-center mt-14 gap-7">
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
        <div className="img items-center">
          <img src="../assets/img/slider.png" alt="slider-bltzo" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
