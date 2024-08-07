/* eslint-disable no-sequences */
import React, { useState } from "react";
import Header from "../components/finance/Header";
import { cardItems } from "../constants";
import Card from "../components/finance/Card";
import Loans from "../components/finance/Loans";
import ToggleComponent from "../components/generic/ToggleComponent";
import FinanceToggle from "../components/finance/toggle/FinanceToggle";

function Finance() {
  const [isSavings, setIsSavings] = useState(true);
  const [isFinance, setIsFinance] = useState(true);
  const [isLoans, setIsLoans] = useState(false);
  const [clickedComponent, setClickedComponent] = useState("");
  return (
    <>
      {isFinance ? (
        <section className="max-w-3xl m-auto p-5">
          <Header />
          <ToggleComponent
            setIsFirst={setIsSavings}
            setIsSecond={setIsLoans}
            isFirst={isSavings}
            isSecond={isLoans}
            first="Savings"
            second="Loans"
            finance
          />

          {isSavings ? (
            <>
              <div className="flex justify-between">
                {/* total balance */}
                <div>
                  <p>Total Balance</p>
                  <p className="font-bold text-2xl">₦ 2,290,345.45</p>
                </div>
                {/* total interest */}
                <div className="text-end">
                  <p>Total Balance</p>
                  <p className="font-bold text-2xl text-red-600">
                    ₦ 2,290,345.45
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-5">
                {cardItems.map((item) => (
                  <>
                    <Card
                      item={item}
                      setClickedComponent={setClickedComponent}
                      setIsFinance={setIsFinance}
                    />
                  </>
                ))}
              </div>
            </>
          ) : (
            <>
              <Loans />
            </>
          )}
          {/* <Bottombar /> */}
        </section>
      ) : (
        <FinanceToggle title={clickedComponent} setIsFinance={setIsFinance} />
      )}
    </>
  );
}

export default Finance;
