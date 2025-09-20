"use client";

import { useState } from "react";
import BuytradeForm from "./Buy";
import SelltradeForm from "./Sell";

export default function TradePage() {
  const [activeTab, setActiveTab] = useState<"BUY" | "SELL">("BUY");

  return (
    <div className="h-[calc(100vh-70px)] overflow-y-auto px-4 sm:px-6 md:px-[30px] py-4 sm:py-6 text-black bg-[#f0f3f5] w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <h2 className="font-[700] text-[20px] sm:text-[22px] md:text-[26px] mb-3 sm:mb-0">
          Trade
        </h2>
      </div>

      <div className="flex flex-col bg-white rounded-[20px]  sm:px-6 md:px-[30px] py-4 sm:py-6 shadow-lg mt-4">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-3 mb-4 gap-3">
          {/* Left side tabs */}
          <div className="flex space-x-6 justify-center md:justify-start ">
            <button
              onClick={() => setActiveTab("BUY")}
              className={`relative font-bold ${
                activeTab === "BUY"
                  ? "text-[#5CB660]"
                  : "text-black hover:text-gray-600 cursor-pointer"
              }`}
            >
              BUY
              {activeTab === "BUY" && (
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#5CB660] rounded "></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("SELL")}
              className={`relative font-bold ${
                activeTab === "SELL"
                  ? "text-[#F32D2D]"
                  : "text-black hover:text-gray-600 cursor-pointer"
              }`}
            >
              SELL
              {activeTab === "SELL" && (
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#F32D2D] rounded"></span>
              )}
            </button>
          </div>

          {/* Right side dropdown + search */}
          <div className="flex flex-col sm:flex-row sm:items-center border rounded-[25px] w-full sm:w-auto overflow-hidden">
            <select className="px-3 sm:px-5 py-2 text-[12px] sm:text-[14px] outline-none border-b sm:border-b-0 sm:border-r bg-white w-full sm:w-auto cursor-pointer">
              <option>ALL</option>
              <option>NSE</option>
              <option>BSE</option>
            </select>

            <div className="flex items-center px-3 sm:px-5 py-2 text-[12px] sm:text-[14px] w-full sm:w-auto">
              <img src="/assert/search.png" alt="search icon" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Enter Symbol"
                className="outline-none ml-2 w-full text-sm"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full overflow-x-auto ">
          {activeTab === "BUY" ? <BuytradeForm /> : <SelltradeForm />}
        </div>
      </div>
    </div>
  );
}
