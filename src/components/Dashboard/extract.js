import data from "./data.json";

// Return opposition teams from data (for team list)
const teams = () => {
  const teams = new Set([]);
  for (let i = 0; i < data.length; i++) {
    teams.add(data[i].opposition);
  }

  return Array.from(teams).sort();
};

//Return Total runs, catches and wickets against a team (for small cards)
const getSummarizedStats = team => {
  let totalRuns = 0;
  let totalCatches = 0;
  let totalWickets = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
        totalRuns += parseInt(data[i].batting_score, 10);
      }
      if (data[i].wickets !== "-") {
        totalWickets += parseInt(data[i].wickets, 10);
      }
      totalCatches += parseInt(data[i].catches);
    }
  }
  return { totalRuns, totalCatches, totalWickets };
};

// Return runs per match per team from data (for line chart)
const getRunsPerTeam = team => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].batting_score
      });
    }
  }
  return runs;
};

// Return wins/loses per team from data (for pie chart)
const getMatchResultsPerTeam = team => {
  let won = 0;
  let lost = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      switch (data[i].match_result) {
        case "won":
          won++;
          break;
        case "lost":
          lost++;
          break;
        default:
          break;
      }
    }
  }
  return { won, lost };
};

export { teams, getSummarizedStats, getRunsPerTeam, getMatchResultsPerTeam };
