import AntdTableWithControls from "@/components/tables/TableRow"
import { HCard, SCard } from "@/components/ui/card"

export default function Holding() {
    const Cards = [
        {
            id: 1,
            name: "Total Investment",
            value: "1,00,293",
            up: true,
            per: "1.3%",
            info: "Up from yesterday"
        },
        {
            id: 2,
            name: "Current Value",
            value: "8,90,000",
            up: false,
            per: "4.3%",
            info: "Down from yesterday"
        },
        {
            id: 3,
            name: "Day P&L",
            value: "59,000",
            up: true,
            per: "1.8%",
            info: "Up from yesterday"
        },
        {
            id: 4,
            name: "Total P&L",
            value: "2,19,000",
            up: true,
            per: "8.5%",
            info: "Up from yesterday"
        },
    ]


    return (
        <div className="text-black p-[30px] bg-[#f0f3f5] w-full">
            <div>
                <h2 className="font-[700] text-[32px]">Holding(20)</h2>
            </div>

            <div>
                <div className="my-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">

                    {Cards.map((card, i) => (
                        <SCard
                            name={card.name} value={card.value} per={card?.per} up={card?.up} info={card?.info}
                        />
                    ))}
                </div>

                <AntdTableWithControls />
            </div>
        </div>
    )
}