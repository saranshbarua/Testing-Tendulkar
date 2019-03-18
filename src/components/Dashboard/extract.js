import data from "./data.json";

// Return opposition teams from data
const Teams = () => {
  const teams = new Set([]);
  for (let i = 0; i < data.length; i++) {
    teams.add(data[i].opposition);
  }
  return Array.from(teams);
};

export { Teams };
