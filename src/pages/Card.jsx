import React, { useState } from "react";
import ToggleComponent from "../components/generic/ToggleComponent";
import { atm } from "../constants/images";
import VirtualContent from "../components/cards/virtual/VirtualContent";
import PhysicalContent from "../components/cards/physical/PhysicalContent";

function Card({ item }) {
  const [isVirtual, setIsVirtual] = useState(true);
  const [isPhysical, setIsPhysical] = useState(false);
  return (
    <div className={` p-5 rounded-[7px] max-w-3xl m-auto`}>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Cards</h1>
        <p className="text-primary font-bold mx-3 text-xl">Q&A</p>
      </div>
      {/* Horizontal menu */}
      <ToggleComponent
        setIsFirst={setIsVirtual}
        setIsSecond={setIsPhysical}
        isFirst={isVirtual}
        isSecond={isPhysical}
        first="Virtual Card"
        second="Physical Card"
        card
      />
      <img className="object-cover w-full" src={atm} alt="ee" />
      {isVirtual ? <VirtualContent /> : <PhysicalContent />}
    </div>
  );
}

export default Card;
