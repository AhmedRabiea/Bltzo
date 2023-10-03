import React from "react";

const CompanyCEO = () => {
  return (
    <div className="flex flex-col mt-28 items-center justify-center gap-24">
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-lg text-headers uppercase">MEET OUR TEAM</h2>
        <h1 className="text-3xl text-txtcolor">
          Community <span className="text-headers">Support & Moderation</span>{" "}
          Team
        </h1>
        <p className="text-lg text-txtparagraph">
          The dangerous world of a man who to have a neighbor just like end.
        </p>
      </div>
      <div className="flex-1">
        <div className="grid lg:grid-cols-2 flex-1 gap-16">
          <div className="">
            <img src="../assets/img/about/ceo.png" alt="bltzo-ceo" />
          </div>
          <div className="flex flex-col gap-5 bg-[#F1F1F6] py-10 lg:py-44 px-10 rounded-2xl">
            <h1 className="text-3xl font-bold text-[#0B4A63]">Company CEO</h1>
            <p className="text-txtparagraph text-lg">
              “Sollicitudin nibh sit amLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
            <h1 className="text-3xl font-bold text-[#0B4A63] pt-10">
              Alice Lynch
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCEO;
