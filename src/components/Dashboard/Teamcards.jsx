import React from "react";
import "./dashboard.css";

const teamData = [
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "Pakistan",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  },
  {
    name: "New Zealand",
    matches: "23"
  }
];

const Cards = props => {
  return teamData.map((item, i) => {
    return (
      <li
        className="team-card"
        value="nameeee"
        key={i}
        onClick={props.changeTeam}
        data-id={item.name}
      >
        <p className="ssp-400">{item.name}</p>
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
