"use client";
import React, { useState } from "react";
import { Table, Input, Button, Select } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";

const { Option } = Select;

const data = [
    { key: 1, stock: "TATAPOWER", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 2, stock: "SBIN", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 3, stock: "WIPRO", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 4, stock: "TATASTEEL", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 5, stock: "GAIL", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 6, stock: "SAIL", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 7, stock: "IOC", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 8, stock: "IDFC", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
    { key: 9, stock: "KTKBANK", ltp: "₹106", quantity: 1000, totalInvestment: "₹131,160", currentValue: "₹106,200", pnl: "8.70", netChg: "+19.02 %", dayChg: "-24.95 %" },
];


export default function AntdTableWithControls() {
    const [search, setSearch] = useState("");
    const [filterRole, setFilterRole] = useState<string | null>(null);

    const filteredData = data.filter((item) => {
        const matchesSearch =
            item.stock.toLowerCase().includes(search.toLowerCase()) ||
            item.ltp.toLowerCase().includes(search.toLowerCase()) ||
            item.totalInvestment.toLowerCase().includes(search.toLowerCase()) ||
            item.currentValue.toLowerCase().includes(search.toLowerCase());

        const matchesFilter = filterRole ? item.stock === filterRole : true;
        return matchesSearch && matchesFilter;
    });

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "TableData");
        XLSX.writeFile(workbook, "table-data.xlsx");
    };

    const columns = [
        { title: "Sr. No.", dataIndex: "key", key: "key" },
        { title: "Stocks", dataIndex: "stock", key: "stock" },
        { title: "LTP", dataIndex: "ltp", key: "ltp" },
        { title: "Quantity", dataIndex: "quantity", key: "quantity" },
        { title: "Total Investment", dataIndex: "totalInvestment", key: "totalInvestment" },
        { title: "Current Value", dataIndex: "currentValue", key: "currentValue" },
        { title: "P&L", dataIndex: "pnl", key: "pnl" },
        { title: "Net chg.", dataIndex: "netChg", key: "netChg" },
        { title: "Day chg.", dataIndex: "dayChg", key: "dayChg" },
        {
            title: "Actions",
            key: "actions",
            render: (_: any, record: any) => (
                <div className="flex gap-2">
                    <Button className="!text-white !bg-red-600" size="small">Buy</Button>
                    <Button className="!text-white !bg-green-600" size="small">Sell</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full p-4">
            <div className="flex justify-between items-center mb-4 gap-2">
                <div className="flex bg-white rounded-lg py-1 w-[345px]">

                    <SearchOutlined />
                    <Input
                        placeholder="Search"
                        className="!outline-none !border-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <Select
                    placeholder="Filter by role"
                    allowClear
                    className="w-[150px]"
                    onChange={(value) => setFilterRole(value)}
                >
                    <Option value="TATAPOWER">TATAPOWER</Option>
                    <Option value="SBIN">SBIN</Option>
                </Select>

                <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
                    Download
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={{ pageSize: 5 }}
                className="w-full"
            />
        </div>
    );
}
