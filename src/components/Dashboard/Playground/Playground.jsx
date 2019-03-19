import React from "react";
import "../dashboard.css";
import LineCharts from "./LineChart";
import PieCharts from "./PieChart";
import PieChartStaium from "./PieChartStadium";
import { getSummarizedStats } from "../extract";

const Playground = props => {
  const res = getSummarizedStats(props.team);
  return (
    <div className="playground">
      <header className="ssp-300 playground-headline">Overview</header>
      <section className="single-insight-cards">
        <div className="small-card card-1 ssp-400">{res.totalRuns} Runs</div>
        <div className="small-card card-2 ssp-400">
          {res.totalWickets} Wickets
        </div>
        <div className="small-card card-3 ssp-400">
          {res.totalCatches} Catches
        </div>
      </section>
      <section className="line-chart-container">
        <LineCharts team={props.team} />
      </section>
      <section className="dual-row">
        <div className="dual-boxes">
          <PieCharts team={props.team} />
        </div>
        <div className="dual-boxes radar">
          <PieChartStaium team={props.team} />
        </div>
      </section>
    </div>
  );
};

export default Playground;
