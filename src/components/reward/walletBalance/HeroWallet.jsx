import React from "react";

function HeroWallet() {
  return (
    <div>
      <div className="bg-[#981014D6] p-5">
        <p>Wallet Balance</p>
        <p className="font-bold text-2xl text-white">₦ 2,290,345.45</p>
      </div>
      <div className="bg-[#981014] text-white flex p-5 gap-10">
        <div>
          <p className="font-thin text-sm">Available Balance</p>
          <p className="font-bold text-xl">₦ 2,290,345.45</p>
        </div>
        <div>
          <p className="font-thin text-sm">Unavailable Balance</p>
          <p className="font-bold text-xl">₦ 0.00</p>
        </div>
      </div>
    </div>
  );
}

export default HeroWallet;
