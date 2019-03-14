import React from "react";
import "./dashboard.css";
import { Teams } from "./extract";

const teams = Teams();
const Cards = props => {
  return teams.map((item, i) => {
    return (
      <li
        className="team-card"
        value="nameeee"
        key={i}
        onClick={props.changeTeam}
        data-id={item}
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
