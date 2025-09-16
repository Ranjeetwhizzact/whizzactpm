"use client";
import { useSidebarStore } from "@/hooks/useSidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const { isOpen } = useSidebarStore();

    const side = [
        { id: 1, src: "/img/dashboards.png", name: "Dashboard", link: "dashboard" },
        { id: 2, src: "/img/holdings.png", name: "Holding", link: "holding" },
        { id: 3, src: "/img/market_depth.png", name: "Market Depth", link: "market-depth" },
        { id: 4, src: "/img/portfolio.png", name: "Portfolio", link: "portfolio" },
        { id: 5, src: "/img/trading.png", name: "Trading" },
        { id: 6, src: "/img/clock.png", name: "Schedular", link: "schedular" },
        { id: 7, src: "/img/setting.png", name: "Setting", link: "setting" },
        { id: 8, src: "/img/turn-off.png", name: "Logout", link: "logout" },
    ];

    return (
        <div
            className={`bg-white text-black h-screen transition-all duration-300 ${isOpen ? "w-[85px]" : "w-[200px]"
                }`}
        >
            <div className="log flex items-center justify-center h-[70px]">
                <span className="text-[#0C3EAE] font-bold text-2xl">
                    W <span className="text-[#991094]">S</span>
                </span>
            </div>
            <div className="px-4">
                {side.map((item) => (
                    <Link key={item.id} href={`/${item.link || ""}`}>
                        <div
                            className={`flex items-center px-3 py-4 rounded-xl mx-auto hover:bg-[#f0f3f5] ${isOpen ? "justify-center" : "gap-4"
                                }`}
                        >
                            <Image
                                width={20}
                                height={20}
                                className=""
                                src={item.src}
                                alt={item.name}
                            />
                            {!isOpen && <span className="whitespace-nowrap">{item.name}</span>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
