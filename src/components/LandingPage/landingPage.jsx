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
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Fade bottom delay={10000}>
            <button className="ssp-400 insights-button">
              See career insights
            </button>
          </Fade>
        </Fade>
      </div>
    </section>
  );
};

export default LandingPage;
