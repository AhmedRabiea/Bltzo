"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GrClose } from "react-icons/gr";
import Navbtn from "./Navbtn";
import { clsx } from "clsx";

const Navbar = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);
  return (
    <div className="shadow-xl z-50 shadow-bltzo-800 w-full left-0 top-0 sticky">
      <div className="flex items-center justify-between py-4 gap-6 bg-white px-7 lg:px-10">
        <div className="logo">
          <img src="/assets/img/logo.svg" alt="bltzo-logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <GrClose /> : <FiMenu />}
        </div>
        <ul
          className={clsx(
            "lg:flex lg:items-center pb-12 lg:pb-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto pl-9 lg:pl-0 transition-all duration-500 ease-in",
            open ? "top-16" : "top-[-490px]"
          )}
        >
          <li>
            <Link href="/" className="ml-10 text-bltzo-300 text-sm font-normal">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="ml-10 text-bltzo-300 text-sm font-normal"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/estimate"
              className="ml-10 text-bltzo-300 text-sm font-normal"
            >
              Estimate Your Project
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/services"
              className="ml-10 text-bltzo-300 text-sm font-normal flex items-center gap-3"
              onClick={() => setIsDown(!isDown)}
            >
              Services
              <span>
                {!isDown ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdOutlineKeyboardArrowUp />
                )}
              </span>
            </Link>
            {isDown && (
              <div className="absolute bg-white flex flex-col rounded-lg items-start top-14 p-2 w-60 flex-wrap">
                <li className="px-3 py-2 w-full hover:bg-bltzo-150 cursor-pointer rounded-md">
                  <Link href="/services/web-services">Web Development</Link>
                </li>
                <li className="px-3 py-2 w-full hover:bg-bltzo-150 cursor-pointer rounded-md">
                  <Link href="/services/product-design-services">
                    Product Design
                  </Link>
                </li>
                <li className="px-3 py-2 w-full hover:bg-bltzo-150 cursor-pointer rounded-md">
                  <Link href="/services/quality-services">
                    Quality Assurance
                  </Link>
                </li>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/contact"
              className="ml-10 text-bltzo-300 text-sm font-normal"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-4 text-bltzo-100 font-semibold">
          <span className="text-2xl">
            <FiSearch />
          </span>
          <Navbtn>Get In Touch</Navbtn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
