import React from "react";
import "../public/assets/css/about.css";

const Slide = (props) => {
  return (
    <div className="headsection h-64 bg-cover bg-center flex flex-col items-center justify-center rounded-md gap-2">
      {props.children}
    </div>
  );
};

export default Slide;
