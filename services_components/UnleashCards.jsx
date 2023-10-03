import React from "react";

const UnleashCards = (props) => {
  return (
    <div className="border-2 border-cardsborder rounded-lg">
      <div className="flex items-center gap-3 px-8 py-8">
        <div>
          <img src={props.icon} alt="bltzo-icon" className="w-28 h-20" />
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p className="text-txtparagraph">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UnleashCards;
