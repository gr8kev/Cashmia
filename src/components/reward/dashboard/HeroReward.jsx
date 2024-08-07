import React from "react";
import { next, setting } from "../../../constants/images";

function HeroReward() {
  return (
    <div className="p-5 bg-[#E8D1D1] pb-20">
      <h1 className="font-extrabold text-3xl">Rewards</h1>

      <div className="flex justify-between">
        {/* Cashback */}
        <div>
          <div className="flex gap-2 items-center my-3">
            <img src={setting} alt="o" />
            <p>Cashback (?) </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-xl text-[#981014]">₦ 2,290.45 </p>
            <img src={next} alt="" />
          </div>
        </div>

        {/* Voucher */}
        <div className="mx-10">
          <p>Voucher </p>
          <div className="flex justify-between">
            <p className="font-bold text-2xl">2 </p>
            <img className="object-contain" src={next} alt="d" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroReward;
