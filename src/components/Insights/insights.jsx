import React from "react";
import "./insights.css";
import Fade from "react-reveal";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

const Insights = () => {
  return (
    <div id="insightsSection" className="insights ssp-300">
      <section className="insights-section">
        <Fade top>
          <b>
            <AnimatedCounter target={36691} />
          </b>
          Runs scored
        </Fade>
      </section>
      <section className="insights-section ssp-300">
        <Fade bottom delay={4000} duration={3000}>
          <b>
            <AnimatedCounter target={742} />
          </b>
          Matches played
        </Fade>
      </section>
    </div>
  );
};

export default Insights;
