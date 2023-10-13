"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const navList = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Estimate Your Project", href: "/estimate" },
    { title: "Services", href: "/services" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  const pathName = usePathname();
  return (
    <div className="flex flex-col mt-14">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b-2 border-slate-100 pb-5 px-5 md:px-0">
        <img src="../assets/img/logo.svg" alt="bltzo-logo" />
        <ul className="flex flex-col md:flex-row items-center bg-white w-full md:w-auto mb-5 md:mb-0">
          {navList.map((item, idx) => {
            const isActive = pathName === item.href;
            return (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={clsx(
                    "text-[#1B192A] text-sm md:text-lg font-normal px-4",
                    isActive ? "text-navactive " : ""
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center">
          <SocialLinks />
        </div>
      </div>
      <div className="text-bltzo-850 font-normal text-sm text-center py-4">
        <p>Bltzo© All rights reserved Copyrights 2023</p>
      </div>
    </div>
  );
};

export default Footer;
