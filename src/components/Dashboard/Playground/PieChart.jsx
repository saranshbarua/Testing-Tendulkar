import React from "react";
import * as Recharts from "recharts";
import { getMatchResultsPerTeam } from "../extract";

const { PieChart, Pie, Sector, Cell } = Recharts;
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const PieCharts = props => {
  const dte = getMatchResultsPerTeam(props.team);
  console.log(dte[0]);
  return (
    <React.Fragment>
      <span
        className="ssp-400"
        style={{
          position: "absolute",
          top: "15px",
          left: "30px",
          fontSize: "20px",
          marginBottom: "10px"
        }}
      >
        Wins / Loses
      </span>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key="index+{index}" fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </React.Fragment>
  );
};

export default PieCharts;
