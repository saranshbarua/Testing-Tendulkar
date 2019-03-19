import React from "react";
import "./dashboard.css";
import { teams } from "./extract";

const teamsList = teams();
const Cards = props => {
  return teamsList.map((item, i) => {
    return (
      <li
        className="team-card team-card-appear"
        value="nameeee"
        key={i}
        onClick={props.changeTeam}
        data-id={item.teamName}
        style={{
          animationDelay: `${i * 40}ms`
        }}
      >
        <p className="ssp-400 team-name">{item.teamName}</p>
        {item.matches === 1 ? (
          <span className="ssp-400 team-matches">{item.matches} match</span>
        ) : (
          <span className="ssp-400 team-matches">{item.matches} matches</span>
        )}
      </li>
    );
  });
};

const Teamcards = props => {
  return (
    <div className="team-cards-container">
      <Cards changeTeam={props.changeTeamContext} />
    </div>
  );
};

export default Teamcards;
