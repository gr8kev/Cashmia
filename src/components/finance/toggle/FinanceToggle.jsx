/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React from "react";
import { financeToggleContent } from "../../../constants";
import ToggleComponent from "./ToggleComponent";

function FinanceToggle({ title, setIsFinance }) {
  const targetContent = financeToggleContent.filter(
    (item) => item.type === "target"
  );
  const safeBoxContent = financeToggleContent.filter(
    (item) => item.type === "safeBox"
  );
  const fixedContent = financeToggleContent.filter(
    (item) => item.type === "fixed"
  );
  const spendAndSave = financeToggleContent.filter(
    (item) => item.type === "spendAndSave"
  );
  let price;
  let middleText;
  let color;
  let btnText;

  switch (title) {
    case "Targets":
      btnText = "Create Target";
      break;
    case "SafeBox":
      btnText = "Proceed";
      break;
    case "Fixed":
      btnText = "Create a plan";
      break;
    case "Wallet":
      btnText = "Create a plan";
      break;
    default:
      btnText = "Proceed";
  }

  switch (title) {
    case "Targets":
      price = "₦0.00";
      break;
    case "SafeBox":
      price = "300";
      break;
    case "Fixed":
      price = "₦0.00";
      break;
  }

  switch (title) {
    case "Targets":
      middleText = "Save with discipline towards a specific target.";
      break;
    case "Fixed":
      middleText = "Deposit & earn massive returns";
  }

  return (
    <>
      <div className="flex gap-5 items-center font-bold p-5 border-b-2 shadow-md">
        <p onClick={() => setIsFinance(true)} className="text-2xl">
          {"<"}
        </p>
        <p className="text-center text-xl">{title}</p>
      </div>
      <div className="p-5">
        <p className="text-center text-3xl">{title}</p>

        <p className={`text-[${color}] text-center text-5xl my-5`}>{price}</p>
        <p className="text-center  my-5">{middleText}</p>
        {/* <p className="text-center  my-5">{middleText}</p> */}

        <div
          className={`flex my-10 bg-[#a4ebe8] ${
            title === "Fixed" && "bg-[#fdbad1] "
          } ${title === "Targets" && "bg-[#a4ebe8] "}   ${
            title === "SafeBox" && "bg-[#c08dc5] "
          }  items-center rounded-[10px]`}
        >
          <p
            className={` font-bold text-white ${
              title === "Targets" && "bg-[#00c1aa] "
            } ${title === "Fixed" && "bg-[#c10040] "}  ${
              title === "SafeBox" && "bg-[#b100c1] "
            } p-4 rounded-[10px]`}
          >
            Recent
          </p>
          <p className={` font-bold text-white p-4 rounded-[10px]`}>
            70***10 saved ₦1,176.6 (6 mins ago){" "}
          </p>
        </div>

        {title === "Wallet" && (
          <>
            {targetContent.map((item) => (
              <ToggleComponent item={item} target />
            ))}
          </>
        )}

        {title === "Targets" && (
          <>
            {targetContent.map((item) => (
              <ToggleComponent item={item} target />
            ))}
          </>
        )}

        {title === "SafeBox" && (
          <>
            {safeBoxContent.map((item) => (
              <ToggleComponent item={item} safeBox />
            ))}
          </>
        )}

        {title === "Fixed" && (
          <>
            {fixedContent.map((item) => (
              <ToggleComponent item={item} fixed />
            ))}
          </>
        )}

        {title === "Spend & Save " && (
          <>
            {spendAndSave.map((item) => (
              <ToggleComponent item={item} safeBox />
            ))}
          </>
        )}

        <button
          className={`mb-20 bg-primary ${
            title === "SafeBox" && "bg-[#b100c1]"
          } ${title === "Targets" && "bg-[#00c1b7]"} ${
            title === "Wallet" && "bg-[#6ab3af] "
          } m-auto absolute bottom-7 text-xl text-white w-[90%] p-5 rounded-xl`}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}

export default FinanceToggle;
