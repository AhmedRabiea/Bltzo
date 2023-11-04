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
import Image from "next/image";
import logo from "/public/assets/img/logo.svg";

const Navbar = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);
  return (
    <nav className="shadow-xl z-50 bg-white shadow-bltzo-800 w-full left-0 top-0 sticky">
      <div className="flex  px-5 justify-between py-4 gap-6   lg:px-10">
        <a href="/">
          <Image
            src={logo}
            alt="bltzo-logo"
            width={100}
            height={100}
            layout="responsive"
          />
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-5 top-6 cursor-pointer lg:hidden"
        >
          {open ? <GrClose /> : <FiMenu />}
        </div>
        <div className="md:block w-full md:w-auto">
          <ul
            className={clsx(
              "lg:flex lg:items-center lg:pb-0 py-2 absolute lg:static bg-white lg:z-auto z-10 left-0 w-full lg:w-auto transition-all duration-500 ease-in",
              open ? "top-[75px]" : "top-[-490px]"
            )}
          >
            <li>
              <Link
                href="/"
                className="ml-10 py-5 text-bltzo-300 text-lg font-normal"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="ml-10 py-5 text-bltzo-300 text-sm font-normal"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/estimate"
                className="ml-10 py-5 text-bltzo-300 text-sm font-normal"
              >
                Estimate Your Project
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/services"
                className="ml-10 py-5 text-bltzo-300 text-sm font-normal items-center gap-3 inline-flex"
                data-dropdown-toggle="dropdown"
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
                <div
                  className="absolute bg-white flex flex-col rounded-lg items-start top-14 p-2 w-60 flex-wrap"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li className="px-3 py-2 w-full hover:bg-bltzo-150 cursor-pointer rounded-md">
                    <Link
                      href="/services/web-services"
                      className="block px-4 py-1.5"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="px-3 py-2 w-full hover:bg-bltzo-150 cursor-pointer rounded-md">
                    <Link
                      href="/services/product-design-services"
                      className="block px-4 py-1.5"
                    >
                      Product Design
                    </Link>
                  </li>
                  <li className="px-3 py-2 w-full hover:bg-bltzo-150 cursor-pointer rounded-md">
                    <Link
                      href="/services/quality-services"
                      className="block px-4 py-1.5"
                    >
                      Quality Assurance
                    </Link>
                  </li>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/contact"
                className="ml-10 py-5 text-bltzo-300 text-sm font-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-4 text-bltzo-100 font-semibold">
          <span className="text-2xl">
            <FiSearch />
          </span>
          <Navbtn>Get In Touch</Navbtn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
