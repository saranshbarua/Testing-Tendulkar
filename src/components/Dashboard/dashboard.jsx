import React, { Component } from "react";
import "./dashboard.css";
import TeamCards from "./Teamcards";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="sidebar-add">He</div>
        <div className="teams-container">
          <header className="team-headline ssp-300">Teams</header>
          <TeamCards />
        </div>
        <div className="playground">dddd</div>
      </div>
    );
  }
}
