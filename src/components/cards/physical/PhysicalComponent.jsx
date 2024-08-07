import React from "react";
import { next } from "../../../constants/images";

function PhysicalComponent({ icon, text }) {
  return (
    <div className="flex justify-between px-3 py-6 rounded-lg bg-grey my-5">
      <div className="flex gap-5">
        <img src={icon} alt="s" />
        <p className="font-bold">{text} </p>
      </div>

      <img className="object-contain mx-3" src={next} alt="s" />
    </div>
  );
}

export default PhysicalComponent;
