import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DropdownMenu from "./components/Dropdown";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 239, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 349, pv: 4300, amt: 2100 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <DropdownMenu />
      </div>
    );
  }
  return null;
};

const NewChart = () => {
  return (
    <div className="chart-container">
      <div className="center">
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
        <div className="b4"></div>
        <div className="graph-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NewChart;
