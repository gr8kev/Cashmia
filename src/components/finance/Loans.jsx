import React from "react";

function Loans() {
  return (
    <>
      <div className="rounded-[7px] px-[3.6rem] py-5 h-[320px] bg-[#FFF8D8]">
        <p className="font-bold">Loan Company Logo</p>

        <div className="flex flex-col justify-center items-center mt-10">
          <p>Credit limit Up to</p>
          <h1 className="font-bold text-[34px] text-[#C97E0E]">₦ 1,000,000</h1>
          <p className="text-sm my-2 text-gray-400">
            Enjoy interest as low as 0.1% daily
          </p>
          <button className="btn mt-3 mb-5">Apply Loan</button>
          <p className="text-sm text-[#af9163]">
            You can get a loan in 2 minutes{" "}
          </p>
        </div>
      </div>
      <p className="px-5 text-xs my-2">
        All loans services are provided by Zephyrgold Microfance Bank
      </p>
    </>
  );
}

export default Loans;
