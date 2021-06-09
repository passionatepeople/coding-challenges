const makeNewTeam = (name) => ({
  team: name,
  matches: 0,
  points: 0,
  goals: { for: 0, against: 0, difference: 0 },
});

const getPoints = (diff, home) => {
  //home team won
  if (diff > 0) {
    return home ? 3 : 0;
  }
  // away team won
  if (diff < 0) {
    return home ? 0 : 3;
  }
  // draw
  if (diff == 0) {
    return 1;
  }
};

const getStandings = (matches) => {
  const standings = new Map();
  // your solution here
  for (let i = 0; i < matches.length; i++) {
    let [homeGoals, awayGoals] = matches[i].result.split("-");
    let homeTeam = matches[i]["home"];
    let awayTeam = matches[i]["away"];
    homeGoals = Number(homeGoals);
    awayGoals = Number(awayGoals);
    let diff = homeGoals - awayGoals;
    !standings.has(homeTeam) && standings.set(homeTeam, makeNewTeam(homeTeam));
    !standings.has(awayTeam) && standings.set(awayTeam, makeNewTeam(awayTeam));

    let home = standings.get(homeTeam);
    home.matches = home.matches + 1;
    (home.goals = {
      for: home.goals.for + homeGoals,
      against: home.goals.against + awayGoals,
      difference: home.goals.difference + homeGoals - awayGoals,
    }),
      (home.points = home.points + getPoints(diff, true));

    let away = standings.get(awayTeam);
    away.matches = away.matches + 1;
    away.goals = {
      for: away.goals.for + awayGoals,
      against: away.goals.against + homeGoals,
      difference: away.goals.difference + awayGoals - homeGoals,
    };
    away.points = away.points + getPoints(diff, false);
  }
  return [...standings.values()].sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    if (a.goals.difference !== b.goals.difference) {
      return b.goals.difference - a.goals.difference;
    }
    if (a.team < b.team) {
      return -1;
    }
    if (a.team > b.team) {
      return 1;
    }
    return 0;
  });
};

module.exports = getStandings;
