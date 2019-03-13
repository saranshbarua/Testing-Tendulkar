import React from "react";
import "./insights.css";
import Slide from "react-reveal";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

const Insights = () => {
  return (
    <React.Fragment>
      <div id="insightsSection" className="insights ssp-300">
        <section className="insights-section">
          <Slide bottom>
            <b>
              <AnimatedCounter target={36691} />
            </b>
            Runs scored
          </Slide>
        </section>
        <section className="insights-section ssp-300">
          <Slide bottom delay={1000} duration={3000}>
            <b>
              <AnimatedCounter target={742} />
            </b>
            Matches played
          </Slide>
        </section>
      </div>
      <div className="insights ssp-300">
        <section className="insights-section">
          <Slide top>
            <b>
              <AnimatedCounter target={242} />
            </b>
            Centuries
          </Slide>
        </section>
        <section className="insights-section ssp-300">
          <Slide bottom>
            <b>
              <AnimatedCounter target={410} />
            </b>
            Half centuries
          </Slide>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Insights;
