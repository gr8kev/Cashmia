import React from "react";
import { down, setting } from "../../../constants/images";
import HeroWallet from "./HeroWallet";
import MiddleWallet from "./MiddleWallet";
import CardItemsWallet from "./CardItemsWallet";
import { walletCard } from "../../../constants";

function WalletBalance() {
  return (
    <div className="bg-bg ">
      <div className="flex bg-white p-3 gap-5">
        <img src={setting} alt="w" />
        <p className="font-bold">Wallet Balance Details</p>
      </div>
      <HeroWallet />
      <p className="w-[90%] m-auto text-sm font-bold text-center my-5">
        Turn on auto save and get ₦6,067 interest per year
      </p>
      <MiddleWallet />
      <div className="flex border-black/50 border-b-[1px] shadow-lg  gap-2 bg-white my-8 py-3 font-bold items-center px-5">
        <p>All Categories</p>
        <img className="object-contain" src={down} alt="ss" />
      </div>
      <p className="w-[90%] m-auto text-sm font-bold  my-5">May, 2024</p>
      {walletCard.map((item) => (
        <CardItemsWallet
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          price={item.price}
          balance={item.balance}
        />
      ))}
    </div>
  );
}

export default WalletBalance;
