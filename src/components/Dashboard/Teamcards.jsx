import React from "react";
import "./dashboard.css";

const teamData = [
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

const Cards = () => {
  return teamData.map((item, i) => {
    return (
      <div className="team-card" key={i}>
        <p className="ssp-400">{item.name}</p>
        {/* <p className="team-matches">{item.matches}</p> */}
      </div>
    );
  });
};

const Teamcards = () => {
  return (
    <div className="team-cards-container">
      <Cards />
    </div>
  );
};

export default Teamcards;
