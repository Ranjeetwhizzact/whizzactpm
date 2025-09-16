import Image from "next/image";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
type HCardProps = {
    name: string;
    src?: string;
    value: string;
    up?: boolean;
    per?: string;
    info?: string;
    color?: string;
};
type SCardProps = {
    id: number;
    name: string;
    value: string;
    up: boolean;
    per: string;
    info: string;
};


export function HCard({ name, src, value, up, per, info, color }: HCardProps) {

    return (
        <div
            style={{ boxShadow: `-5px -5px 4px 0px ${color}` }}
            className="hcard  pt-[30px] px-[22px] rounded-[14px] h-[160px] bg-white text-black
        ">
            <div className="flex justify-between">

                <span>{name}</span>
                <div
                    style={{ backgroundColor: color }}
                    className={`z-[0.21] w-[60px] h-[60px]  rounded-[23px] flex items-center justify-center `}>
                    {src &&
                        <Image
                            className="z-20"
                            src={src}
                            width={35}
                            height={35}
                            alt={name}
                        />}

                </div>
            </div>
            <div className="text-xl font-bold">{value}</div>
        </div>
    )
}
export function SCard({ name, value, per, up, info }: SCardProps) {
    return (<div className="bg-white shadow-md rounded-xl p-4 ">
        <p className="text-gray-500 text-sm">{name}</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">₹{value}</h2>
        <div className="flex items-center gap-2 mt-2">
            {up ? <IoIosTrendingUp className="!text-teal-600" /> : <IoIosTrendingDown className="text-red-600" />}
            <p className={` text-sm font-semibold`}>
                <span className={`${up ? "text-teal-600" : "text-rose-600"} font-medium`}>{per}%  </span><span className="text-gray-500">{info}</span>
            </p>
        </div>
    </div>
    )
}