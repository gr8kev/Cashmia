import React, { useState } from "react";
import Dashboard from "../components/reward/dashboard/Dashboard";
import WalletBalance from "../components/reward/walletBalance/WalletBalance";

function Reward() {
  const [toggleDetails, setToggleDetails] = useState(false);
  return (
    <section className="max-w-3xl m-auto bg-[#E9E0E0] h-screen pt-10">
      {toggleDetails ? (
        <WalletBalance />
      ) : (
        <Dashboard setToggleDetails={setToggleDetails} />
      )}
    </section>
  );
}

export default Reward;
