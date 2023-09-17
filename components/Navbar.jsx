"use client";

import Link from "next/link";
import React, { useState } from "react";

import { usePathname } from "next/navigation";

import { FiSearch, FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Navbtn from "./Navbtn";
import { clsx } from "clsx";

const Navbar = () => {
  const navList = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Estimate Your Project", href: "/estimate" },
    { title: "Services", href: "/services" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const pathName = usePathname();

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-xl shadow-navshadow w-full left-0 top-0 ">
      <div className="flex items-center justify-between py-4 gap-6 bg-white px-7 md:px-10">
        <div className="logo">
          <img src="/assets/img/logo.svg" alt="bltzo logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <GrClose /> : <FiMenu />}
        </div>
        <ul
          className={clsx(
            "md:flex md:items-center pb-12 md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in",
            open ? "top-16" : "top-[-490px]"
          )}
        >
          {navList.map((item, idx) => {
            const isActive = pathName === item.href;
            return (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={clsx(
                    "text-navtext ml-8 my-7 md:my-0 text-lg font-normal pb-6",
                    isActive ? "text-navactive border-b-2 border-navactive" : ""
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between gap-4 text-navtext">
          <span className="text-2xl font-bold">
            <FiSearch />
          </span>
          <Navbtn>Get In Touch</Navbtn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
