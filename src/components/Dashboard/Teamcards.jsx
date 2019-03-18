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
        data-id={item}
        style={{
          animationDelay: `${i * 40}ms`
        }}
      >
        <p className="ssp-400">{item}</p>
        {/* <p className="team-matches">{item.matches}</p> */}
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
