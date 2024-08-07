import React from "react";

function VirtualCard({ icon, title, desc }) {
  return (
    <div className="flex gap-5 my-8 ">
      <img className="object-contain" src={icon} alt="" />
      <div>
        <p className="font-bold text-lg">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default VirtualCard;
