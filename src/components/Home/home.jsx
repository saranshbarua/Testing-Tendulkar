import React from "react";
import "./home.css";

// Wrapper component for the app
import LandingPage from "../LandingPage/landingPage";
import Insights from "../Insights/runsSection";
const Home = () => {
  return (
    <main className="container">
      <LandingPage />
      <Insights />
    </main>
  );
};

export default Home;
