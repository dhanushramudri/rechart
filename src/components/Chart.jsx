import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "1.0550", value: 0 },
  { name: "1.0560", value: 1 },
  { name: "1.0562", value: 1.5 },
  { name: "1.0567", value: 2 },
  { name: "1.0570", value: 2.5 },
  { name: "1.0572", value: 3 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#333",
          padding: "10px",
          borderRadius: "5px",
          color: "#fff",
        }}
      >
        <p>Price: {label}</p>
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => (
  <ResponsiveContainer width="100%" height={600}>
    <ComposedChart
      layout="vertical"
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis type="number" hide />
      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
      />
      <Legend />
      <Bar
        dataKey="value"
        barSize={20}
        fill="#00aaff"
        radius={[10, 10, 10, 10]}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#00d5ff"
        strokeWidth={15}
        dot={false}
      />
    </ComposedChart>
  </ResponsiveContainer>
);

export default Chart;
