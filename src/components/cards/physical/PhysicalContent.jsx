import React from "react";
import PhysicalComponent from "./PhysicalComponent";
import { lock, manageCard } from "../../../constants/images";

function PhysicalContent() {
  return (
    <div>
      <button className="my-5 py-3 rounded-full text-primary font-bold bg-red-100 w-[50%] flex justify-center m-auto">
        Show Details {">"}{" "}
      </button>
      <div className="my-4 py-4 text-center text-[40px] rounded-xl text-white font-bold bg-green-500 flex justify-center m-auto">
        Advert
      </div>
      <PhysicalComponent icon={manageCard} text="Manage Card " />
      <PhysicalComponent icon={lock} text="Manage Dispute " />
    </div>
  );
}

export default PhysicalContent;
