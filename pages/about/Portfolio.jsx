"use client";

import React from "react";
import PortfolioCards from "./PortfolioCards";
import { NavLink } from "../shared/NavLink";
import KnowMoreBtn from "../shared/KnowMoreBtn";

const Portfolio = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="grid gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm text-bltzo-400 font-normal">PORTFOLIO</h2>
          <h1 className="text-3xl font-bold text-bltzo-200">
            Get a Glimpse of Our{" "}
            <span className="text-bltzo-400">Software Expertise</span>
          </h1>
          <p className="text-sm font-normal text-bltzo-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="flex-1 gap-20 text-sm font-normal text-bltzo-350">
          <div className="flex flex-col gap-20">
            <ul className="flex flex-wrap gap-16">
              <li>
                <NavLink
                  href="#"
                  exact
                  className="border-1 border-bltzo-100 p-2 text-base"
                >
                  All
                </NavLink>
              </li>
              <li>
                <NavLink href="#">APPS</NavLink>
              </li>
              <li>
                <NavLink href="#">Websites</NavLink>
              </li>
              <li>
                <NavLink href="#">Branding</NavLink>
              </li>
              <li>
                <NavLink href="#">Lorem</NavLink>
              </li>
              <li>
                <NavLink href="#">APPS</NavLink>
              </li>
            </ul>
            <div className="tab-content">
              <div id="all">
                <PortfolioCards />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <KnowMoreBtn>Know More</KnowMoreBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
