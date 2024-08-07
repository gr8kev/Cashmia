import React from "react";
import { coin, phone } from "../../../constants/images";

function DailyBonus({ title, desc }) {
  return (
    <div className="m-5 py-5 px-3  items-center rounded-[10px] bg-white flex ">
      <div className="flex gap-5">
        <img
          className="bg-[#ccc] object-contain px-3 rounded-10"
          src={phone}
          alt="ee"
        />
        <div>
          <div className="flex gap-5">
            <p className="font-bold">{title}</p>
            <img className="object-contain " src={coin} alt="" />
          </div>
          <p className=" text-xs w-[95%]">{desc}</p>
        </div>
      </div>
      <button className="text-xs  py-3 px-2 w-[30%] rounded-full bg-[#981014] text-white">
        Get Now
      </button>
    </div>
  );
}

export default DailyBonus;
