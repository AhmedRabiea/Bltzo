import React from "react";

const CooperationProcess = () => {
  const stages = [
    {
      icon: "../assets/img/services/coIcon1.png",
      title: "No More Time Clocking",
      content:
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia",
    },
    {
      icon: "../assets/img/services/coIcon2.png",
      title: "No More Time Clocking",
      content:
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia",
    },
    {
      icon: "../assets/img/services/coIcon3.png",
      title: "No More Time Clocking",
      content:
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia",
    },
    {
      icon: "../assets/img/services/coIcon4.png",
      title: "No More Time Clocking",
      content:
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia",
    },
    {
      icon: "../assets/img/services/coIcon5.png",
      title: "No More Time Clocking",
      content:
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia",
    },
    {
      icon: "../assets/img/services/coIcon6.png",
      title: "No More Time Clocking",
      content:
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia",
    },
  ];
  return (
    <div className="container mx-auto mt-44">
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-normal text-bltzo-400">
              DETAILED COOPERATION PROCESS
            </h2>
            <h1 className="text-3xl font-bold text-bltzo-200">
              Optimal{" "}
              <span className="text-bltzo-400">Technologies and Project</span>{" "}
              Stages
            </h1>
          </div>
          <p className="font-normal text-bltzo-500 text-sm">
            Whether you want to build or rebuild a web-based product, we’re here
            to help you. We’ll walk you through
            <br /> choosing the most optimal technologies to be able to deliver
            a web-based solution that meets your
            <br /> requirements. When starting a project from scratch, these are
            the stages you can expect:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16 items-center">
          <div className="flex flex-col gap-7">
            {stages.slice(0, 3).map((stage, idx) => (
              <div className="flex gap-6 items-center">
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-xl text-bltzo-200">
                    {stage.title}
                  </h1>
                  <p className="text-sm font-normal text-bltzo-250">
                    {stage.content}
                  </p>
                </div>
                <div>
                  <img src={stage.icon} alt="bltzo-process" />
                </div>
              </div>
            ))}
          </div>
          <div>
            {" "}
            <img
              src="../assets/img/services/cooperation-process.png"
              alt="cooperation-process"
            />
          </div>
          <div className="flex flex-col gap-7">
            {stages.slice(3).map((stage, idx) => (
              <div className="flex gap-6 items-center">
                <div>
                  <img src={stage.icon} alt="bltzo-process" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-xl text-bltzo-200">
                    {stage.title}
                  </h1>
                  <p className="text-sm font-normal text-bltzo-250">
                    {stage.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationProcess;
