import SplineAreaChart from "@/components/charts/AreaChart"
import PieChart from "@/components/charts/PieChart"
import AddUserButton from "@/components/ui/Button"
import { HCard } from "@/components/ui/card"

import { FiRefreshCw } from "react-icons/fi"

export default function Dashboard() {

    const Cards = [
        {
            id: 1,
            name: "Active Clients",
            img: '/assert/users.png',
            value: "40,683",
            color: "#e5e4ff"
        },
        {
            id: 2,
            name: "Total Investment",
            img: '/assert/rupee.png',
            value: "1,00,293",
            up: true,
            per: "1.3%",
            info: "Up from yesterday",
            color: "#fff3d6"
        },
        {
            id: 3,
            name: "Current Value",
            img: '/assert/dollar.png',
            value: "8,90,000",
            up: false,
            per: "4.3%",
            info: "Down from yesterday",
            color: "#fcdcee"
        },
        {
            id: 4,
            name: "Available Funds",
            img: '/assert/available-fund.png',
            value: "99,000,000",
            color: "#caf0f6",
        },
        {
            id: 5,
            name: "Day P&L",
            img: '/assert/candle-cart.png',
            value: "59,000",
            up: true,
            per: "1.8%",
            info: "Up from yesterday",
            color: "#f1f6b9"
        },
        {
            id: 6,
            name: "Total P&L",
            img: '/assert/cart.png',
            value: "2,19,000",
            up: true,
            per: "8.5%",
            info: "Up from yesterday",
            color: '#d9f7e8',
        },
    ]

    const orders = [
        { heading: "open order", val: 469 },
        { heading: "Cancel order", val: 469 },
        { heading: "Execute order", val: 469 },
        { heading: "Rejected order", val: 469 },
    ]

    const series = [44, 55, 13, 33]
    const labels = ["mango", "apple", "grapes", "orange"]

    const splineSeries = [
        { name: "Series A", data: [31, 40, 28, 51, 42, 109, 100] },
        { name: "Series B", data: [11, 32, 45, 32, 34, 52, 41] },
    ]

    const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    return (
        <div className="p-[30px] h-full overflow-x-scrolls bg-[#f0f3f5] w-full text-black">
            <div className="md:flex justify-between items-center">
                <h2 className="font-[700] text-[32px]">Dashboard</h2>

                <div className="md:flex items-center gap-4 ">
                    <select defaultValue="Pick a Runtime" className="select w-[216px] h-[34px] rounded-[20px] bg-white px-6 outline-none">
                        <option disabled={true}>Pick a Runtime</option>
                        <option>npm</option>
                        <option>Bun</option>
                        <option>yarn</option>
                    </select>

                    <select defaultValue="Pick a Runtime" className="select w-[216px] h-[34px] rounded-[20px] bg-white px-6 outline-none">
                        <option disabled={true}>Pick a Runtime</option>
                        <option>npm</option>
                        <option>Bun</option>
                        <option>yarn</option>
                    </select>

                    <AddUserButton />
                    <FiRefreshCw className="h-7 w-7" />

                </div>
            </div>

            <div>
                <div className="grid mt-8 lg:grid-cols-4 md:grid-cols-2 gap-x-[20px] gap-y-[30px] grid-cols-1 mx-auto">

                    {Cards.map((card, i) => (
                        <HCard key={card.id} name={card.name} src={card.img} value={card.value} per={card?.per} info={card?.info} color={card?.color} />
                    ))}
                </div>

                <div className="info mt-8 grid lg:grid-cols-4 md:grid-cols-3 gap-3">
                    {orders.map((order, i) => (
                        <div key={i} className="p-4 bg-white rounded-[14px] shadow-lg w-[240px] md:w-auto">
                            <div className="font-medium text-gray-500">{order.heading}</div>
                            <div className="font-bold text-[28px]">40,689</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

                    <div className="md:flex-3 bg-white rounded-xl p-4 w-[350px] ">
                        <SplineAreaChart
                            series={splineSeries}
                            xaxisCategories={categories}
                            height={300}
                            gradientFill={true}
                            colors={["#BEFFBE", "#775DD0"]}
                        />

                    </div>
                    <div className="md:flex-1 w-[350px] bg-white rounded-xl p-4">
                        <PieChart series={series} labels={labels} type="donut" height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}