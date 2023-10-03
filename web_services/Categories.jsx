import clsx from "clsx";
import React from "react";

const Categories = () => {
  const categories = [
    {
      icon: "../assets/img/services/frontend.svg",
      title: "Frontend Development",
      desc: "We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.",
    },
    {
      icon: "../assets/img/services/backend.svg",
      title: "Backend Development",
      desc: "We use server-side technologies like Python, Ruby on Rails, and Node.js for prototyping and development, producing fast and scalable web apps.",
    },
    {
      icon: "../assets/img/services/fullstack.svg",
      title: "Full Stack Development",
      desc: "We deliver end-to-end web development, combining frontend and backend solutions and other technologies necessary to make your product a success",
    },
  ];
  return (
    <div className="h-screen bg-sectionbg p-28">
      <div className="grid gap-28">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <h2 className="text-headers font-normal text-lg">
            WEB DEVELOPMENT TECHNOLOGIES
          </h2>
          <h1 className="font-bold text-4xl text-black">
            Which technologies will bring maximum value to your business?
          </h1>
          <p className="font-normal text-txtparagraph">
            Solve customer problems by choosing cutting-edge technologies for
            your tech stack. Take your business to the next level with the right
            solutions tailored to your own requirements.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20 flex-1">
          <div className="flex flex-col gap-16">
            {categories.map((cat, idx) => (
              <div
                className={clsx(
                  "flex gap-5",
                  idx == 0 ? "bg-white py-10 px-10 rounded-lg shadow-lg" : ""
                )}
              >
                <img src={cat.icon} alt="bltzo-categories" />
                <div>
                  <h1 className="text-2xl font-bold">{cat.title}</h1>
                  <p className="font-normal text-txtparagraph">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src="../assets/img/services/categories.png"
              alt="bltzo-categories"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;