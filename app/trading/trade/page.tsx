import React from 'react'

function tradeForm() {
    return (
        <div className="h-full w-full mx-auto  p-[30px] overflow-x-scrolls bg-[#f0f3f5] text-black">
            <div className="md:flex justify-between items-center">
                <h2 className="font-[700] text-[32px]">Trade</h2>
            </div>

            <div className="flex flex-col bg-white rounded-[20px] px-[30px] py-[10px]  shadow-lg mt-10">
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-start sm:items-center mb-4">
                    <div className="flex mb-4">
                        <button className="px-4 py-2 text-[#5CB660]  border-b-5 border-[#5CB660] text-[20px] font-bold">
                            BUY
                        </button>
                        <button className="px-4 py-2 text-black hover:text-gray-500 text-[20px] font-bold">
                            SELL
                        </button>
                    </div>

                    <div className="flex border rounded-[25px] w-full sm:w-auto">
                        <select className=" px-5 py-2 outline-none ">
                            <option>ALL</option>
                            <option>NSE</option>
                            <option>BSE</option>
                        </select>
                        <div className="flex border-l px-5 py-2">
                            <img src="/assert/search.png" alt="search icon" />
                            <input
                                type="text"
                                placeholder="Enter Symbol"
                                className="outline-none ml-2 w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Stock Detail*/}
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-start sm:items-center mb-4 border-b border-[#4F4F4F]">
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

                {/* Order Types */}
                <div className="flex flex-wrap gap-4 mb-4 mt-5">
                    {[
                        "NORMAL",
                        "STOPLOSS",
                        "AMO",
                        "ROBO",
                    ].map((opt) => (
                        <label
                            key={opt}
                            className="flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="ordertype"
                                className="
          appearance-none w-5 h-5 rounded-full border-2 border-black bg-white
          checked:border-[#0099FF] checked:border-2
          relative transition duration-200 ease-in-out
          checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 
          checked:after:rounded-full checked:after:bg-[#0099FF] 
          checked:after:absolute checked:after:inset-0 
          checked:after:m-auto
        "
                            />
                            {opt}
                        </label>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 mt-5">
                    {[
                        "INTRADAY",
                        "DELIVERY",
                        "MARGIN",
                        "BO",
                        "CARRYFORWARD",
                    ].map((opt) => (
                        <label
                            key={opt}
                            className="flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="ordertype"
                                className="appearance-none w-5 h-5 rounded-full border-2 border-black bg-white
                                            checked:border-[#0099FF] checked:border-2
                                            relative transition duration-200 ease-in-out
                                            checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 
                                            checked:after:rounded-full checked:after:bg-[#0099FF] 
                                            checked:after:absolute checked:after:inset-0 
                                            checked:after:m-auto
                                            "
                            />
                            {opt}
                        </label>
                    ))}
                </div>


                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col">
                        Quantity:<input
                            type="number"
                            placeholder="Quantity"
                            className="border rounded-[10px] px-2 py-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        Price:<input
                            type="number"
                            placeholder="Price"
                            className="border rounded-[10px] px-2 py-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        Trigger Price:<input
                            type="number"
                            placeholder="Trigger Price"
                            className="border rounded-[10px] px-2 py-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        Disclosed Quantity:<input
                            type="number"
                            placeholder="Disclosed Quantity"
                            className="border rounded-[10px] px-2 py-2"
                        />
                    </div>
                    
                </div>

                {/* Account Table */}
                <div className="overflow-x-auto mb-4">
                    <table className="w-full border text-sm min-w-[400px]">
                        <thead className="bg-green-100">
                            <tr>
                                <th className="p-2 text-left">Account</th>
                                <th className="p-2 text-right">Fund</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-2">
                                    <input type="checkbox" className="mr-2" />
                                    P372472
                                </td>
                                <td className="p-2 text-right">9,63,874,876</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-2">
                                    <input type="checkbox" className="mr-2" />
                                    P372345
                                </td>
                                <td className="p-2 text-right">1,99,999,999</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-2">
                                    <input type="checkbox" className="mr-2" />
                                    P372346
                                </td>
                                <td className="p-2 text-right">8,87,234</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="text-green-600 font-medium">Required: 63.35</div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-4 py-2 border rounded">
                            Reset
                        </button>
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-green-600 text-white rounded">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tradeForm