import React from "react";
import "./landingPage.css";
import Fade from "react-reveal";

const LandingPage = () => {
  return (
    <section className="lp-sec">
      <div className="lp-image">
        {/* <img
          src="https://worldofcricket.in/wp-content/uploads/2018/10/wallpaper2you_253926.jpg"
          alt="Sachin's poster"
          height="80%"
          width="80%"
        /> */}
      </div>
      <div className="lp-content">
        <Fade bottom delay={1000}>
          {/* <span className="pd-700 name">Sachin</span> */}
        </Fade>
        <br />
        <Fade bottom delay={8000}>
          {/* <span className="pd-700 name">Tendulkar</span> */}
        </Fade>
      </div>
    </section>
  );
};

export default LandingPage;
