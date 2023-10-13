import React from "react";

const ClientsCards = (props) => {
  return (
    <li className="border-2 rounded-lg shadow-md border-itemsborder w-40 h-24 py-8 px-8 flex items-center justify-center">
      <img src={props.src} alt={props.alt} />
    </li>
  );
};

export default ClientsCards;
