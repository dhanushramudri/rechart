// Chart.js
import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";
import DropdownMenu from "./Dropdown";
import styled from "styled-components";

const data = [
  {
    name: "Page E",
    updraw: 50,
    partial1: 50,
    partial2: 50,
    drawdown: 10550,
    startdrawdown: 10550,
  },
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

// Styled component for the BarChart
const StyledBarChart = styled(BarChart)`
  .recharts-bar-rectangle:nth-child(1) .recharts-rectangle {
    border-left: 2px solid black;
  }
  .recharts-bar-rectangle:last-child .recharts-rectangle {
    border-right: 2px solid black;
  }
`;

const Chart = () => {
  return (
    <ResponsiveContainer className={"recharts-responsive-container"}>
      <StyledBarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" hide={true} />
        <YAxis
          axisLine={false}
          type="number"
          domain={[10500, 10750]}
          ticks={[10500, 10550, 10600, 10650, 10700, 10750]}
          allowDataOverflow // Set the start and end of the Y-axis
        />
        <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip />} />
        <Legend wrapperStyle={{ borderRadius: 3 }} />
        <Bar
          className="bar1"
          dataKey="drawdown"
          stackId="a"
          fill="#141D26"
          barSize={300}
          activeDot={false}
        />
        <Bar dataKey="partial1" stackId="a" fill="#268B9F" />
        <Bar dataKey="partial2" stackId="a" fill="#1A9289" />
        <Bar dataKey="updraw" stackId="a" fill="#084e58" />
      </StyledBarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
