import React from "react";
import KnowMoreBtn from "../shared/KnowMoreBtn";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const contactinfo = [
    { icon: "../assets/img/phone.svg", desc: "+1-9162490709 +1-9116342741" },
    {
      icon: "../assets/img/mail.svg",
      desc: "company@easyme.com support@easyme.com",
    },
    {
      icon: "../assets/img/location.svg",
      desc: "25 Euclid Avenue NE, Albuquerque, nm, 83106 United States",
    },
  ];
  return (
    <div className="container mx-auto mt-36">
      <div className="grid grid-flow-row rounded-lg md:py-32 py-16 px-5 md:px-32 bg-gradient-to-t md:bg-gradient-to-l from-[#0B4A63] from-30% via-[#F9F8FF] via-10% to-[#F9F8FF] to-90%">
        <div className="grid md:grid-cols-2 items-center justify-center md:gap-40 gap-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-bltzo-500">
              Gravida neque convallis a cras semper auctor.
              <br /> Elit pellentesque habitant morbi
            </p>
            <div className="w-full mt-6 flex flex-col gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 basis-1/2">
                  <label
                    htmlFor="fullname"
                    className="block text-lg font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-2 rounded-md border-contactform p-2"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 basis-1/2">
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full border-2 rounded-md border-contactform p-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="message" className="text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2.5 text-lg font-normal border-2 border-contactform rounded-sm"
                  placeholder="Describe what you need here.."
                ></textarea>
              </div>
              <div className="w-full md:w-1/2">
                <KnowMoreBtn>Send A Message</KnowMoreBtn>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-10">
            <div className="flex flex-col gap-20">
              <h1 className="text-4xl font-bold">
                Contact <span className="text-headers">Information</span>
              </h1>
              <ul className="flex flex-col gap-2">
                {contactinfo.map((item) => (
                  <li className="flex gap-2">
                    <img src={item.icon} alt="bltzo-contact" />
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-bltzo-500">
                  FOLLOW US ON SOCIAL MEDIA
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
