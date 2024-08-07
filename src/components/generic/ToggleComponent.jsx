/* eslint-disable no-sequences */
import React from "react";
import { setting } from "../../constants/images";

function ToggleComponent({
  isSecond,
  isFirst,
  first,
  second,
  setIsFirst,
  setIsSecond,
  finance,
  card,
}) {
  return (
    <div
      className={`${
        card
          ? "my-5 flex items-center cursor-pointer px-2 justify-between w-full"
          : "my-5 flex items-center justify-between w-full"
      }  `}
    >
      <p
        className={`text-xl ${card && " mx-[0.5rem] text-xl  "} mx-[3.5rem] ${
          isFirst && "font-bold border-b-4  "
        }`}
        // eslint-disable-next-line no-sequences
        onClick={() => (setIsFirst(true), setIsSecond(false))}
      >
        {first}
      </p>
      <div className="flex items-center gap-5">
        <p
          className={`text-xl mx-[3.5rem] ${
            isSecond ? "font-bold border-b-4 " : "font-light"
          } ${card && "mx-[1rem]"}`}
          onClick={() => (setIsFirst(false), setIsSecond(true))}
        >
          {second}
        </p>
        {finance && <img src={setting} alt="dd" />}
      </div>
    </div>
  );
}

export default ToggleComponent;
