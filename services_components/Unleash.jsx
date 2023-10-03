import React from "react";
import UnleashCards from "./UnleashCards";

const Unleash = () => {
  const stages = [
    {
      icon: "../assets/img/services/ideation.png",
      title: "Ideation",
      desc: "Conducting Product Discovery and Product Research",
    },
    {
      icon: "../assets/img/services/ideation.png",
      title: "Ideation",
      desc: "Conducting Product Discovery and Product Research",
    },
    {
      icon: "../assets/img/services/ideation.png",
      title: "Ideation",
      desc: "Conducting Product Discovery and Product Research",
    },
    {
      icon: "../assets/img/services/ideation.png",
      title: "Ideation",
      desc: "Conducting Product Discovery and Product Research",
    },
    {
      icon: "../assets/img/services/ideation.png",
      title: "Ideation",
      desc: "Conducting Product Discovery and Product Research",
    },
  ];
  return (
    <div className="container mx-auto mt-36">
      <div className="grid gap-10">
        <div className="grid gap-3">
          <h3 className="text-lg text-headers font-normal">HOW WE WORKS</h3>
          <h1 className="text-3xl font-bold">
            <span className="text-headers">Unleash</span> The Power Of Your Own
            Mobile App
          </h1>
          <p className="text-txtparagraph">
            Experience the advantages of having your own mobile app! Stay
            relevant and competitive with technological opportunities!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {stages.map((stage) => (
            <UnleashCards
              icon={stage.icon}
              title={stage.title}
              desc={stage.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unleash;
