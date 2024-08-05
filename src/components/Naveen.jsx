import React from "react";
import {
  CartesianGrid,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import DropdownMenu from "./Dropdown";
const data = [
  {
    name: "Page E",
    updraw: 30,
    partial1: 50,
    partial2: 50,
    drawdown: 10550,
    startdrawdown: 10550,
    extrabarstart: 10552,
    extrabarend: 115,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer className={"recharts-responsive-container"}>
      <BarChart
        width={500}
        height={350}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <XAxis dataKey="name" xAxisId={0} hide />
        <XAxis dataKey="name" xAxisId={1} hide />
        <YAxis
          axisLine={false}
          type="number"
          domain={[10500, 10750]}
          ticks={[10500, 10550, 10600, 10650, 10700, 10750]}
          allowDataOverflow
          yAxisId={0}
        />
        <YAxis
          axisLine={false}
          type="number"
          allowDataOverflow
          yAxisId={1}
          hide
        />
        <Tooltip cursor={{ fill: "transparent" }} content={<DropdownMenu />} />
        {/* Existing Bars */}
        <Bar
          className="bar1"
          dataKey="drawdown"
          stackId="a"
          fill="#141D26"
          xAxisId={1}
          barSize={300}
          radius={[0, 0, 30, 30]}
        />
        <Bar
          dataKey="partial2"
          stackId="a"
          fill="#1A9289"
          barSize={300}
          xAxisId={1}
        />
        \
        <Bar
          dataKey="partial1"
          stackId="a"
          fill="#268B9F"
          barSize={300}
          xAxisId={1}
        />
        <Bar
          dataKey="updraw"
          stackId="a"
          fill="#084e58"
          barSize={300}
          radius={[30, 30, 0, 0]}
          xAxisId={1}
        />
        {/* Extra Range Bar */}
        <Bar
          dataKey="extrabarstart"
          stackId="b"
          fill="transparent"
          barSize={25}
          radius={[0, 0, 0, 0]}
          isAnimationActive={false}
          xAxisId={0}
        />
        <Bar
          dataKey="extrabarend"
          stackId="b"
          fill="#9087D6"
          barSize={25}
          radius={[10, 10, 10, 10]}
          isAnimationActive={false}
          xAxisId={0}
        />
        <Bar
          dataKey="extrabarstop"
          stackId="b"
          fill="transparent"
          barSize={25}
          radius={[0, 0, 0, 0]}
          isAnimationActive={false}
          xAxisId={0}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
