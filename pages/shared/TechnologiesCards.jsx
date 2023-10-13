import React from "react";

const TechnologiesCards = () => {
  const technologies = [
    { img: "../assets/img/services/angular.svg" },
    { img: "../assets/img/services/drupal.svg" },
    { img: "../assets/img/services/laravel.svg" },
    { img: "../assets/img/services/Magento.png" },
    { img: "../assets/img/services/nodejs.svg" },
    { img: "../assets/img/services/python.svg" },
    { img: "../assets/img/services/reactjs.svg" },
    { img: "../assets/img/services/vuejs.svg" },
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {technologies.map((technology) => (
        <img
          className="basis-1/5 p-4 w-28 h-28 object-contain"
          src={technology.img}
          alt="bltzo-technology"
        />
      ))}
    </div>
  );
};

export default TechnologiesCards;
