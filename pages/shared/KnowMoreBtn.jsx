import React from "react";

const KnowMoreBtn = (props) => {
  return (
    <button className="px-6 py-3 text-lg font-normal text-white bg-bltzo-100 rounded-md text-center">
      {props.children}
    </button>
  );
};

export default KnowMoreBtn;
