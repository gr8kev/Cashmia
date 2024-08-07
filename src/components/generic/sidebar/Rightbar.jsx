import React, { useState } from "react";
import { bottomBarItems } from "../../../constants";
import Button from "../bottombar/Button";

function Rightbar() {
  const [active, setActive] = useState("card");

  return (
    <div className="hidden  bg-white shadow-xl border rounded-xl mx-2 p-3 lg:flex mt-10 h-[500px] w-[270px] fixed right-0 top-0  ">
      <div className="">
        {bottomBarItems.map((item) => (
          <div onClick={() => setActive(item.title)}>
            <Button active={active} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
