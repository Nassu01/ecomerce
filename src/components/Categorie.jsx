import React from "react";


function Categorie({ icon, name }) {
  return (
    <div className="categorie flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
      <span className="text-xl">{icon}</span>
      <span>{name}</span>
    </div>
  );
}

export default Categorie;
