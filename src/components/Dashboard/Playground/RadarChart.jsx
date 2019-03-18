import React from "react";
import "../dashboard.css";
import * as Recharts from "recharts";

const {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} = Recharts;

const data = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 }
];

const RadarCharts = () => {
  return (
    <RadarChart
      cx={150}
      cy={150}
      outerRadius={100}
      width={300}
      height={300}
      data={data}
      className="ssp-400"
      style={{
        color: "white"
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.8}
      />
    </RadarChart>
  );
};

export default RadarCharts;
