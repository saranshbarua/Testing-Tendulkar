import React from "react";
import * as Recharts from "recharts";

const { PieChart, Pie, Tooltip } = Recharts;

const PieChartStadium = props => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];
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
        Stadium Stats
      </span>
      <PieChart width={400} height={400} className="ssp-400">
        <Pie
          isAnimationActive={true}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </React.Fragment>
  );
};

export default PieChartStadium;
