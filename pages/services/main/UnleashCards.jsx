import React from "react";

const UnleashCards = (props) => {
  return (
    <div className="border-2 border-bltzo-150 rounded-md">
      <div className="flex items-center gap-6 px-8 py-9">
        <div>
          <img src={props.icon} alt="bltzo-icon" size={"icon"} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-medium">{props.title}</h1>
          <p className="text-bltzo-600 text-sm">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UnleashCards;
