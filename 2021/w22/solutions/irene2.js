const getPoints = (homeGoals, awayGoals) => {
  return homeGoals === awayGoals ? [1, 1] : homeGoals > awayGoals ? [3, 0] : [0, 3];
};

const getDefaultTeam = team => {
  return { team, matches: 0, points: 0, goals: { for: 0, against: 0, difference: 0 } };
};

const getTeam = (teams, name) => {
  const team = teams.find(t => t.team === name)
  if (team === undefined) {
    const newTeam = getDefaultTeam(name)
    teams.push(newTeam);
    return newTeam;
  }
  return team;
}

const updateTeam = (team, points, goalsFor, goalsAgainst) => {
  team.matches++;
  team.points += points;
  team.goals.for += goalsFor;
  team.goals.against += goalsAgainst;
  team.goals.difference = team.goals.for - team.goals.against;
};

const getStandings = (matches)  => {
  const results = [];
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const { home, away, result } = match;
    const score = result.split('-');
    const homeGoals = +score[0];
    const awayGoals = +score[1];

    const [homePoints, awayPoints] = getPoints(homeGoals, awayGoals);
    const homeTeam = getTeam(results, home);
    const awayTeam = getTeam(results, away);

    updateTeam(homeTeam, homePoints, homeGoals, awayGoals);
    updateTeam(awayTeam, awayPoints, awayGoals, homeGoals);
  }

  return results.sort((a,b) => {
    if (a.points !== b.points) {
      return a.points > b.points ? -1 : 1;
    }

    if (a.goals.difference !== b.goals.difference) {
      return a.goals.difference > b.goals.difference ? -1 : 1;
    }

    return a.team > b.team ? 1 : -1;
  });
};

module.exports = getStandings;
