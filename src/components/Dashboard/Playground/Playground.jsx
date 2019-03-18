import React from "react";
import "../dashboard.css";

const Playground = props => {
  return (
    <div className="playground">
      <header className="ssp-300 playground-headline">Overview</header>
      <section className="single-insight-cards">
        <div className="small-card card-1 ssp-400">card 1</div>
        <div className="small-card card-2 ssp-400">card 2</div>
        <div className="small-card card-3 ssp-400">card 3</div>
      </section>
      {props.team}
    </div>
  );
};

export default Playground;
