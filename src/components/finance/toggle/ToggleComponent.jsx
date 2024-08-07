import React from "react";

function ToggleComponent({ item, target, safeBox, fixed }) {
  return (
    <div className="my-5">
      <div className="flex gap-5 ">
        <img className="object-contain" src={item.icon} alt="" />
        <div>
          <p
            className={`font-bold text-xl ${safeBox && "text-red-500"} ${
              target && "text-green-500"
            } ${fixed && "text-red-300"}`}
          >
            {item.title}
          </p>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ToggleComponent;
