import React from "react";
import { watering } from "../../../constants/images";

function MiddleWallet() {
  return (
    <div>
      <img src={watering} alt="" />
      <div className="relative bottom-7 mb-8 mx-5 bg-[#E8D1D1] p-3 text-sm text-center rounded-[10px]">
        After Opening, the funds are transferred to Cwealth in real time to
        obtain interest
      </div>
      <button className="rounded-full p-3 text-white  bg-primary w-[70%] m-auto flex justify-center">
        Turn on Auto-save
      </button>
    </div>
  );
}

export default MiddleWallet;
