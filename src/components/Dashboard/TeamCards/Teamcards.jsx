import React from "react";
import "../dashboard.css";
import { teams } from "../extract";

const Cards = props => {
  const teamsList = teams();
  return teamsList.map((item, i) => {
    if (props.activeTeam === item.teamName) {
      return (
        <li
          className="team-card team-card-appear"
          value="nameeee"
          key={i}
          onClick={props.changeTeam}
          data-id={item.teamName}
          style={{
            animationDelay: `${i * 40}ms`,
            minHeight: "110px",
            borderBottom: "5px solid #2F82EC"
          }}
        >
          <p className="ssp-400 team-name" style={{ fontSize: "21px" }}>
            {item.teamName}
          </p>
          {item.matches === 1 ? (
            <span className="ssp-400 team-matches">{item.matches} match</span>
          ) : (
            <span className="ssp-400 team-matches">{item.matches} matches</span>
          )}
        </li>
      );
    }
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
      <Cards
        activeTeam={props.activeTeam}
        changeTeam={props.changeTeamContext}
      />
    </div>
  );
};

export default Teamcards;
