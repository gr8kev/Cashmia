import React from "react";

function CardItemsWallet({ icon, title, desc, price, balance }) {
  return (
    <div className="bg-white  m-5 p-3 flex gap-2">
      <img className="object-contain " src={icon} alt="a" />
      <div className=" w-full">
        <p className="font-bold text-sm">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="text-end w-full">
        <p className="font-bold text-sm">{price}</p>
        <p className="text-xs">{balance}</p>
      </div>
    </div>
  );
}

export default CardItemsWallet;
