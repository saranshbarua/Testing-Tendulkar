import React from "react";
import * as Recharts from "recharts";
import { getStadiumStats } from "../extract";

const { BarChart, Bar, XAxis, YAxis, Tooltip } = Recharts;

const BarCharts = props => {
  let result = getStadiumStats(props.team);
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
      <BarChart
        width={400}
        height={200}
        data={result}
        margin={{ top: 30, right: 40, left: -40, bottom: -20 }}
        className="ssp-400"
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="won" stackId="a" fill="#8884d8" />
        <Bar dataKey="lost" stackId="a" fill="#82ca9d" />
      </BarChart>
    </React.Fragment>
  );
};

export default BarCharts;
