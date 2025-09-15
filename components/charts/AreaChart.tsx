// components/SplineAreaChart.tsx
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

interface SplineAreaChartProps {
    series: { name: string; data: (number | { x: string | number | Date; y: number })[] }[];
    xaxisCategories?: (string | number | Date)[];
    height?: number;
    width?: string | number;
    // Optional props for colors etc.
    colors?: string[];
    gradientFill?: boolean;
}

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SplineAreaChart: React.FC<SplineAreaChartProps> = ({
    series,
    xaxisCategories,
    height = 350,
    width = '100%',
    colors = ['#008FFB', '#00E396', '#FEB019'],  // example default colors
    gradientFill = true,
}) => {
    const options: ApexOptions = {
        chart: {
            type: 'area',
            height,
            zoom: {
                enabled: false,
            },
        },
        stroke: {
            curve: 'smooth',  // smooth curves for spline area
            width: 2,
        },
        dataLabels: {
            enabled: false,
        },
        colors: colors,
        fill: {
            type: gradientFill ? 'gradient' : 'solid',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            type: xaxisCategories && xaxisCategories[0] instanceof Date ? 'datetime' : 'category',
            categories: xaxisCategories,
        },
        tooltip: {
            enabled: true,
        },
        grid: {
            show: true,
            borderColor: '#e7e7e7',
            strokeDashArray: 4,
        },
        legend: {
            show: true,
            position: 'top',
        },
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                width={width}
                height={height}
            />
        </div>
    );
};

export default SplineAreaChart;
