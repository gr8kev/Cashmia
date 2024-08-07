/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-undef */
import React from "react";

function Card({ item, setClickedComponent, setIsFinance }) {
  return (
    <div className={`h-[200px] ${item.cardColor} p-3 rounded-[7px]`}>
      <div className="flex items-center gap-2">
        <img alt="ww" src={item.logo} />
        <p
          onClick={() => (setClickedComponent(item.title), setIsFinance(false))}
          className="font-bold"
        >
          {item.title}
        </p>
      </div>
      <p className="my-3">{item.desc}</p>
      <p className="font-bold">{item.price}</p>
    </div>
  );
}

export default Card;
