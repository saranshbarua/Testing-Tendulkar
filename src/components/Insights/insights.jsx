import React from "react";
import "./insights.css";
import Fade from "react-reveal";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

const Insights = () => {
  return (
    <React.Fragment>
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
      <div className="insights ssp-300">
        <section className="insights-section">
          <Fade top>
            <b>
              <AnimatedCounter target={242} />
            </b>
            Centuries
          </Fade>
        </section>
        <section className="insights-section ssp-300">
          <Fade bottom>
            <b>
              <AnimatedCounter target={410} />
            </b>
            Half centuries
          </Fade>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Insights;
