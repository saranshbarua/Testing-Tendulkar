import React from "react";
import "../dashboard.css";
import * as Recharts from "recharts";
import { getRunsPerTeam } from "../extract";

const { LineChart, Line, XAxis, YAxis, Tooltip } = Recharts;

const LineCharts = props => {
  const data = getRunsPerTeam(props.team);
  return (
    <React.Fragment>
      <span
        className="ssp-400"
        style={{
          position: "absolute",
          top: "10px",
          left: "40px"
        }}
      >
        Runs per match
      </span>
      <LineChart
        width={900}
        height={250}
        data={data}
        margin={{ top: 35, right: 30, left: 10, bottom: 5 }}
        className="ssp-400"
      >
        <XAxis />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="runs"
          stroke="#e91e63"
          strokeWidth="3"
          strokeOpacity="0.85"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </React.Fragment>
  );
};

export default LineCharts;
