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
      icon: "../assets/img/services/design.png",
      title: "Design",
      desc: "Creating the UX Design, UI Design, and Branding",
    },
    {
      icon: "../assets/img/services/dev.png",
      title: "Development",
      desc: "Coding the app courtesy of our veteran engineers",
    },
    {
      icon: "../assets/img/services/quality.png",
      title: "Quality Assurance",
      desc: "Testing the app and making sure that everything works well",
    },
    {
      icon: "../assets/img/services/maintainance.png",
      title: "Maintenance & Support",
      desc: "Co-managing the app with your technology team",
    },
  ];
  return (
    <div className="container mx-auto mt-56">
      <div className="grid gap-11">
        <div className="grid gap-3">
          <h3 className="text-sm text-bltzo-400 font-normal">HOW WE WORKS</h3>
          <h1 className="text-3xl font-bold text-bltzo-200">
            <span className="text-bltzo-400">Unleash</span> The Power Of Your
            Own Mobile App
          </h1>
          <p className="text-bltzo-600 text-sm">
            Experience the advantages of having your own mobile app! Stay
            relevant and competitive with technological opportunities!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
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
