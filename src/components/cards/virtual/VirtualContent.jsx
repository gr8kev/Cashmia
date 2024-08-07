import React from "react";
import VirtualCard from "./VirtualCard";
import { cart, instant, Layer_1, security } from "../../../constants/images";

function VirtualContent() {
  return (
    <div>
      <VirtualCard
        icon={instant}
        title="Instant Access"
        desc="Apply and activate Instantly"
      />
      <VirtualCard
        icon={Layer_1}
        title="Safety"
        desc="No Physical Handling. No risk of loss"
      />
      <VirtualCard
        icon={cart}
        title="Online Marchant Acceptance"
        desc="Accepted by 40,000+ online merchants including JUMIA, KONGA, NETFLIX, UBET wallet funding and others. "
      />
      <VirtualCard
        icon={security}
        title="Security"
        desc="Click the button below to accept Terms & Conditions "
      />
      <button className="cta">Get it Now</button>
    </div>
  );
}

export default VirtualContent;
