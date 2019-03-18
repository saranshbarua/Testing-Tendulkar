import React from "react";
import "../dashboard.css";
import LineCharts from "./LineChart";

const Playground = props => {
  return (
    <div className="playground">
      <header className="ssp-300 playground-headline">Overview</header>
      <section className="single-insight-cards">
        <div className="small-card card-1 ssp-400">card 1</div>
        <div className="small-card card-2 ssp-400">card 2</div>
        <div className="small-card card-3 ssp-400">card 3</div>
      </section>
      <section className="line-chart-container">
        <LineCharts team={props.team} />
      </section>
      <section className="dual-row">
        <div className="dual-boxes" />
        <div className="dual-boxes radar" />
      </section>
    </div>
  );
};

export default Playground;
