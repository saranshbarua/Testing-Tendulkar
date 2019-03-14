import React, { Component } from "react";
import "./dashboard.css";
import TeamCards from "./Teamcards";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: ""
    };
    this.setTeam = this.setTeam.bind(this);
  }

  setTeam(data) {
    this.setState({
      selectedTeam: data.currentTarget.dataset.id
    });
    console.log(data.currentTarget.dataset.id);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="sidebar-add">He</div>
        <div className="teams-container">
          <header className="team-headline ssp-300">Teams</header>
          <TeamCards changeTeamContext={this.setTeam} />
        </div>
        <div className="playground">{this.state.selectedTeam}</div>
      </div>
    );
  }
}
