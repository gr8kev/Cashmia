import React, { useState } from "react";
import Button from "./Button";

import { bottomBarItems } from "../../../constants";

const Bottombar = () => {
  const [active, setActive] = useState("card");

  return (
    <div className="lg:hidden">
      <div
        className=" border-t-2 p-5 justify-evenly fixed bg-white border bottom-[0px] w-full  gap-5
         items-center flex"
      >
        {bottomBarItems.map((item) => (
          <div onClick={() => setActive(item.title)}>
            <Button active={active} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottombar;
