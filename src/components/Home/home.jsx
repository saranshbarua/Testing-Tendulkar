// Wrapper component for the app
import React from "react";
import "./home.css";

// Components
import LandingPage from "../LandingPage/landingPage";
import Insights from "../Insights/insights";

const Home = () => {
  return (
    <main className="container">
      <LandingPage />
    </main>
  );
};

export default Home;
