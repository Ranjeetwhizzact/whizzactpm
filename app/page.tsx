import SplineAreaChart from "@/components/charts/AreaChart"
import PieChart from "@/components/charts/PieChart"
import AddUserButton from "@/components/ui/Button"
import { HCard } from "@/components/ui/card"

import { Nunito_Sans } from "next/font/google"
import { FiRefreshCw } from "react-icons/fi"
import Dashboard from "./dashboard/page"

export default function Home() {

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
    <Dashboard />
  )
}