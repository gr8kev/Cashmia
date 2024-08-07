import React from "react";
import DailyBonus from "./DailyBonus";
import { calender, down } from "../../../constants/images";
import HeroReward from "./HeroReward";

function Dashboard({ setToggleDetails }) {
  return (
    <div>
      {" "}
      <HeroReward />
      <div className=" relative -top-16 m-5 py-5 px-3 items-center rounded-[10px] bg-white flex justify-between">
        <div className="flex gap-8">
          <img
            className="bg-[#ccc] p-2 rounded-[10px] object-contain"
            src={calender}
            alt="ee"
          />
          <div>
            <p className="font-bold">Daily Bonus</p>
            <p className=" text-xs ">Get up to ₦100 bonus</p>
          </div>
        </div>
        <button className="py-2 px-5 rounded-full bg-[#981014] text-white">
          Get Now
        </button>
      </div>
      <p className="px-5 -mt-16 font-bold">Daily Bonus</p>
      <DailyBonus
        title="MTN Airtime "
        desc="Buy Airtime and get up to 6% 
Cashback"
      />
      <DailyBonus
        title="Glo Airtime  "
        desc="Buy Airtime and get up to 6% 
Cashback"
      />
      <DailyBonus
        title="Airtel Airtime "
        desc="Buy Airtime and get up to 6% 
Cashback"
      />
      <div className="flex justify-center gap-3 pt-5 text-[#981014] ">
        <p
          onClick={() => setToggleDetails(true)}
          className="cursor-pointer font-bold  text-[#981014] "
        >
          View Details
        </p>
        <img className="object-contain" src={down} alt="s" />
      </div>
    </div>
  );
}

export default Dashboard;
