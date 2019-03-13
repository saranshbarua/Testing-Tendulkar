import React from "react";
import "./landingPage.css";
import Fade from "react-reveal";

const LandingPage = () => {
  return (
    <section className="lp-sec">
      <div className="lp-image">
        <Fade>
          <img
            src="http://www.mobileswall.com/wp-content/uploads/2015/01/640-Sachin-Tendulkar-God-of-Cricket-l.jpg"
            alt="Sachin's poster"
            className="img-card"
          />
        </Fade>
      </div>
      <div className="lp-content">
        <Fade bottom delay={1000}>
          <span className="pd-700 name">Sachin Tendulkar</span>
        </Fade>
        <br />
        <Fade bottom delay={8000}>
          <p
            className="ssp-300"
            style={{
              color: "white"
            }}
          >
            "I hate losing and cricket being my first love, once I enter the
            ground it's a different zone altogether and that hunger for winning
            is always there."
          </p>
          <Fade bottom delay={10000}>
            <a href="#insightsSection" className="ssp-400 insights-button">
              See career insights
            </a>
          </Fade>
        </Fade>
      </div>
    </section>
  );
};

export default LandingPage;
