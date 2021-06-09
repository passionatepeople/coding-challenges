const initTeamData = (team) => ({
  team,
  points: 0,
  goals: { for: 0, against: 0, difference: 0 },
  matches: 0
});

const processMatchForTeam = (teamData, goalsFor, goalsAgainst) => {
  teamData.matches++;
  teamData.points +=
    goalsFor === goalsAgainst ? 1 : goalsFor > goalsAgainst ? 3 : 0;
  teamData.goals.for += goalsFor;
  teamData.goals.against += goalsAgainst;
  teamData.goals.difference += goalsFor - goalsAgainst;
};

const getStandings = (matches) => {
  const teamsList = [];
  const teamsMap = {};

  const getTeamData = (team) => {
    if (teamsMap[team]) {
      return teamsMap[team];
    }

    const r = initTeamData(team);
    teamsList.push(r);
    teamsMap[team] = r;

    return r;
  };

  for (let i = 0; i < matches.length; i++) {
    const { home, away, result } = matches[i];
    const [goalsHome, goalsAway] = result.split('-');

    processMatchForTeam(getTeamData(home), +goalsHome, +goalsAway);
    processMatchForTeam(getTeamData(away), +goalsAway, +goalsHome);
  }

  return teamsList.sort(
    (a, b) =>
      b.points - a.points ||
      b.goals.difference - a.goals.difference ||
      (b.team > a.team ? -1 : 1)
  );
};

module.exports = getStandings;