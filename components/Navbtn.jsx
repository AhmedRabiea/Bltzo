import React from "react";

const Navbtn = (props) => {
  return (
    <button className="py-3 px-6 outline outline-1 outline-navbtn rounded-md">
      {props.children}
    </button>
  );
};

export default Navbtn;
