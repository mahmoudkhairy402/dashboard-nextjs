"use client";
import React, { PureComponent } from "react";
import styles from "./chart.module.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    visite: 4000,
    click: 2400,
  },
  {
    name: "Sun",
    visite: 3000,
    click: 1398,
  },
  {
    name: "Mon",
    visite: 2000,
    click: 9800,
  },
  {
    name: "Tue",
    visite: 2780,
    click: 3908,
  },
  {
    name: "Wed",
    visite: 1890,
    click: 4800,
  },
  {
    name: "Thu",
    visite: 2390,
    click: 3800,
  },
  {
    name: "Fri",
    visite: 3490,
    click: 4300,
  },
];

function Chart() {
  return (
    <div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <div className={styles.title}>latest recap</div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ background: "#151c2c", border: "0" }} />
            <Legend />
            <Line
              type="natural"
              dataKey="click"
              stroke="#8884d8"
              strokeDasharray="0"
            />
            <Line
              type="natural"
              dataKey="visite"
              stroke="#82ca9d"
              strokeDasharray="0"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
