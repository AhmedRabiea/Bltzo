import Link from "next/link";
import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col mt-10 pl-24 gap-12">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-bltzo-200">
            Empower Your Project with Estimation
          </h1>
          <p className="font-normal text-bltzo-500 text-lg">
            Fill the following form
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="block text-xl font-medium text-bltzo-750"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-2 rounded-md border-bltzo-650 px-2 py-4"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-xl font-medium text-bltzo-750"
            >
              Business e-mail
            </label>
            <input
              type="text"
              id="email"
              className="w-full border-2 rounded-md border-bltzo-650 px-2 py-4"
              placeholder="ahmed.ali@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="block text-xl font-medium text-bltzo-750"
            >
              Suggest a date and time
            </label>
            <input
              type="date"
              id="date"
              className="w-full border-2 rounded-md border-bltzo-650 px-2 py-4"
              placeholder="Select DD/MM/YY, 00:00"
              required
            />
          </div>
          <div>
            <label for="message" className="text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2.5 text-lg font-normal border-2 border-bltzo-650 rounded-sm"
              placeholder="Describe your business.."
            ></textarea>
          </div>
          <div className="text-lg font-normal flex gap-1 items-center">
            <span className="text-bltzo-100">
              <AiFillCheckSquare />
            </span>
            <span className="text-bltzo-550 text-sm">
              Contacting us you agree to our{" "}
              <Link href={""} className="text-bltzo-100 underline">
                Terms & Conditions
              </Link>
            </span>
          </div>
          <div>
            <button className="px-12 py-3 bg-bltzo-100 text-white rounded-md text-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="h-full">
        <img
          src="../assets/img/contact/contact.png"
          alt="bltzo-contact"
          className=""
        />
      </div>
    </div>
  );
};

export default Contact;
