"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSidebarStore } from "@/hooks/useSidebar";

export default function TopBar() {
    const { toggle } = useSidebarStore()



    const toogleSideBar = () => {
        toggle()
    }

    return (
        <div className="h-[70px] flex items-center justify-between px-[30px]">

            <div className="right flex items-center gap-4">

                <GiHamburgerMenu onClick={toogleSideBar} className="text-2xl cursor-pointer" />

                <div className="bg-[#F0F3F5] flex items-center w-[388px] h-[38px] rounded-full px-3 gap-2">
                    <CiSearch className="" />
                    <input
                        className="border-none outline-none"
                        placeholder="search"
                    />
                </div>
            </div>

            <div className="left mr-4 hidden items-center justify-center w-[232.7px] h-[44px] gap-4 md:flex">
                <Image
                    src="/img/bell.png"
                    width={25}
                    height={25}
                    alt="bell icon"
                />
                <MdOutlineKeyboardArrowDown
                    className="rounded-full border-1"
                />

                <span className="name">Hello! Shivam</span>
                <span>
                    <Image
                        src="/img/avatar.png"
                        width={25}
                        height={25}
                        alt="avatar icon"
                    />
                </span>
            </div>


        </div>
    )
}