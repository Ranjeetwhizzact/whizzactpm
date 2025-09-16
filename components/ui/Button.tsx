import React from 'react'
import { Plus } from "lucide-react"

function AddUserButton() {

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


    return (
        <span className="flex items-center text-white rounded-[20px] px-[15px] bg-[#0099ff] font-bold py-1.5 "><Plus /> <button>New Account</button></span>
    )
}

export default AddUserButton