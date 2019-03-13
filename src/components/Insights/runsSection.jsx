import React from "react";
import "./insights.css";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

const RunsSection = () => {
  return (
    <section className="runs ssp-400">
      <AnimatedCounter target={10000} /> Runs scored till now
    </section>
  );
};

export default RunsSection;
