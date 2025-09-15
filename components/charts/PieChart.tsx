// components/PieChart.tsx
"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import because ApexCharts uses `window` (not available in SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface PieChartProps {
    series: number[];
    labels: string[];
    type?: "pie" | "donut";
    width?: string | number;
    height?: string | number;
}

export default function PieChart({
    series,
    labels,
    type = "donut",
    width = "100%",
    height = 350,
}: PieChartProps) {
    const options: ApexOptions = {
        chart: {
            type,
        },
        labels,
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "18px",
                        },
                        value: {
                            show: true,
                            fontSize: "14px",
                            formatter: (val) => val?.toString() ?? "",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: (w) =>
                                w.globals.seriesTotals.reduce((a, b) => a + b, 0).toString(),
                        },
                    },
                },
                expandOnClick: false,
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (val: number) => `${val.toFixed(1)}%`,
        },
        legend: {
            position: "bottom",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                    },
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Chart options={options} series={series} type={type} width={width} height={height} />
        </div>
    );
}
