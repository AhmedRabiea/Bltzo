import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="flex text-2xl text-bltzo-100 gap-2">
      <BsFacebook />
      <BsInstagram />
      <BsLinkedin />
      <BsYoutube />
    </div>
  );
};

export default SocialLinks;
