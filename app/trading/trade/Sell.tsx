"use client";
import PriceScheduler from "./scheduler/price";
import TimeScheduler from "./scheduler/time";
import PercentageScheduler from "./scheduler/percentage";

import React, { useState } from "react";

function SelltradeForm() {
    const [groupAccount, setGroupAccount] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [active, setActive] = useState<string>();
    const [open, setOpen] = useState<"PRICE" | "TIME" | "PERCENTAGE" | null>(null);





    const individualAccounts = [
        { account: "P372472", fund: "9,63,874,876" },
        { account: "P372345", fund: "1,99,999,999" },
        { account: "P372346", fund: "8,87,234" },
    ];

    const groupAccounts = [
        { account: "Shivam Group", fund: "3,93,494,662" },
        { account: "Rohit Group", fund: "2,34,679" },
        { account: "Nilesh Group", fund: "1,99,999,999" },
    ];

    const tableData = groupAccount ? groupAccounts : individualAccounts;


    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 items-start sm:items-center border-b border-[#4F4F4F] pb-2">
                <div className="flex items-center gap-1">
                    <div className=" text-black text-[16px] font-bold">ZOMATO</div>
                    <div className="text-[#A4A4A4] text-[8px] font-semibold">NSE</div>
                </div>
                <div className="flex  text-[16px] font-semibold items-center gap-5">
                    <div className=" text-[#7F7F7F] ">0.35</div>
                    <div className="flex items-center text-[#5CB660] ">0.56%
                        <img src="/assert/sort-up-arrow.png" alt="profit" className='gap-2 w-[16px] h-[16px]' />
                    </div>
                    <div className="text-[#5CB660] text-[16px] font-semibold">63.35</div>

                </div>
            </div>

            {/*1st Radio List*/}
            <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 mt-5 ">
                {[
                    "NORMAL",
                    "STOPLOSS",
                    "AMO",
                    "ROBO",
                ].map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 text-[12px] font-bold cursor-pointer "
                    >
                        <input
                            type="radio"
                            name="orderType"
                            className="appearance-none w-[16px] h-[16px] rounded-full border-2 border-black bg-white
                                            checked:border-[#0099FF] checked:border-2
                                            relative transition duration-200 ease-in-out
                                            checked:after:content-[''] checked:after:w-2 checked:after:h-2
                                            checked:after:rounded-full checked:after:bg-[#0099FF] 
                                            checked:after:absolute checked:after:inset-0 
                                            checked:after:m-auto"
                        />
                        {opt}
                    </label>
                ))}
            </div>

            {/*2st Radio List*/}
            <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 mb-4 mt-5">
                {[
                    "INTRADAY",
                    "DELIVERY",
                    "MARGIN",
                    "BO",
                    "CARRYFORWARD",
                ].map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 text-[12px] font-bold cursor-pointer "
                    >
                        <input
                            type="radio"
                            name="productType"
                            className="appearance-none w-[16px] h-[16px] rounded-full border-2 border-black bg-white
                                            checked:border-[#0099FF] checked:border-2
                                            relative transition duration-200 ease-in-out
                                            checked:after:content-[''] checked:after:w-2 checked:after:h-2
                                            checked:after:rounded-full checked:after:bg-[#0099FF] 
                                            checked:after:absolute checked:after:inset-0 
                                            checked:after:m-auto"
                        />
                        {opt}
                    </label>
                ))}
            </div>


            {/* 1st Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  text-[12px] font-bold">
                <div className="flex flex-col">
                    QUANTITY:<input
                        type="number"
                        placeholder="Quantity"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

                <div className="flex flex-col">
                    PRICE:<input
                        type="number"
                        placeholder="Price"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

                <div className="flex flex-col">
                    TRIGGER PRICE:r<input
                        type="numbe"
                        placeholder="Trigger Price"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

                <div className="flex flex-col">
                    DISCLOSED QUANTITY:<input
                        type="number"
                        placeholder="Disclosed Quantity"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

            </div>


            {/*3st Radio List*/}
            <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 mb-4 mt-5">
                {[
                    "LIMIT",
                    "MARKET",
                    "STOP_LOSS",
                    "STOPLOSS_MARKET",
                ].map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 text-[12px] font-bold cursor-pointer "
                    >
                        <input
                            type="radio"
                            name="priceType"
                            className="appearance-none w-[16px] h-[16px] rounded-full border-2 border-black bg-white
                                            checked:border-[#0099FF] checked:border-2
                                            relative transition duration-200 ease-in-out
                                            checked:after:content-[''] checked:after:w-2 checked:after:h-2
                                            checked:after:rounded-full checked:after:bg-[#0099FF] 
                                            checked:after:absolute checked:after:inset-0 
                                            checked:after:m-auto"
                        />
                        {opt}
                    </label>
                ))}
            </div>

            {/* 2st Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2 text-[12px] font-bold">
                <div className="flex flex-col">
                    TARGET:<input
                        type="number"
                        placeholder="Target"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

                <div className="flex flex-col">
                    STOPLOSS:<input
                        type="number"
                        placeholder="Stoploss"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

                <div className="flex flex-col">
                    TRAILING STOPLOSS:<input
                        type="number"
                        placeholder="Trailing Stoploss"
                        className="border rounded-[10px] px-2 py-2 mt-1"
                    />
                </div>

            </div>


            {/* 🔹 Group Account + Advanced Toggle */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mt-4">
                {/* Group Account Toggle */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Group Account:</span>
                    <button
                        onClick={() => setGroupAccount(!groupAccount)}
                        className={`w-10 h-5 flex items-center rounded-full transition cursor-pointer ${groupAccount ? "bg-[#0099FF]" : "bg-gray-300 cursor-pointer"
                            }`}
                    >
                        <span
                            className={`h-4 w-4 bg-white rounded-full shadow-md transform transition ${groupAccount ? "translate-x-5" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>

                <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-sm text-[#F32D2D] hover:underline self-start sm:self-auto cursor-pointer"
                >
                    Scheduler {showAdvanced ? "▲" : "▼"}
                </button>
            </div>

            {/* 🔹 Scheduler Section */}
            {showAdvanced && (
                <div className="flex flex-col gap-4 my-4 py-2 ">
                    <div>
                        {/* Buttons */}
                        <div className="flex gap-4 ">
                            <button
                                onClick={() => setOpen("PRICE")}
                                className="px-6 py-[2px] border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50"
                            >
                                Price
                            </button>
                            <button
                                onClick={() => setOpen("TIME")}
                                className="px-6 py-[2px] border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50"
                            >
                                Time
                            </button>
                            <button
                                onClick={() => setOpen("PERCENTAGE")}
                                className="px-6 py-[2px] border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50"
                            >
                                Percentage
                            </button>
                        </div>

                        {/* Modal */}
                        {open && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                                {open === "PRICE" && <PriceScheduler onClose={() => setOpen(null)} />}
                                {open === "TIME" && <TimeScheduler onClose={() => setOpen(null)} />}
                                {open === "PERCENTAGE" && <PercentageScheduler onClose={() => setOpen(null)} />}
                            </div>
                        )}
                    </div>
                    {/* Inputs based on active button can be added here */}
                </div>
            )}

            {/* 🔹 Account Table */}
            {/* Table */}
            <div className="overflow-x-auto rounded-[10px] border border-black my-4">
                <table className="min-w-full text-[12px] text-left border-collapse">
                    <thead>
                        <tr className="bg-[#FFD3D3] text-black">
                            <th className="px-4 py-2 border-b border-black">
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox w-5 h-5 border-2 border-black rounded-sm cursor-pointer 
                                            checked:text-black checked:border-black   checked:bg-[#0099FF]"
                                    />
                                </label>
                            </th>
                            <th className="px-4 py-2 border-b border-l border-black">Account</th>
                            <th className="px-4 py-2 border-b border-l border-black">Fund</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-t border-black">
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox w-5 h-5 border-2 border-black rounded-sm cursor-pointer 
                                            checked:text-black checked:border-black   checked:bg-[#0099FF]"
                                        />
                                    </label>
                                </td>
                                <td className="px-4 py-2 border-t border-l border-black">{row.account}</td>
                                <td className="px-4 py-2 border-t border-l border-black">
                                    {row.fund}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Footer Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="text-[#F32D2D] text-[12px] font-medium self-start sm:self-center">Required: 63.35</div>
                <div className="flex gap-2 w-full sm:w-auto text-[20px] font-bold ">
                    <button className="w-full sm:w-auto sm:flex-1 md:w-[200px] h-[40px] flex items-center justify-center px-4 py-2 border rounded-[10px]">
                        Reset
                    </button>
                    <button className="w-full sm:w-auto sm:flex-1 md:w-[200px] h-[40px] flex items-center justify-center px-4 py-2 bg-[#F32D2D] text-white font-bold rounded-[10px]">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SelltradeForm;