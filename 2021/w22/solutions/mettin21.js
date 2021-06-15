const POINTS_WIN = 3;
const POINTS_LOSE = 0;
const POINTS_EQUAL = 1;
const updateTeam = ({response, team, goalsFor, goalsAgainst, points, difference}) => {
  const teamRanking = response.find(({team: teamName}) => teamName === team);
  if (!teamRanking) {
    response.push({
      team,
      matches: 1,
      points,
      goals: {
        for: goalsFor,
        against: goalsAgainst,
        difference,
      },
    });
    return
  }
  teamRanking.matches = teamRanking.matches + 1;
  teamRanking.points = teamRanking.points + points;
  teamRanking.goals = {
    for: teamRanking.goals.for + goalsFor,
    against: teamRanking.goals.against + goalsAgainst,
    difference: teamRanking.goals.difference + difference,
  };
};
module.exports = (matches) => {
  return matches.reduce((response, {result, home, away}) => {
    const [homeGoals, awayGoals] = result.split('-');
    const homeAsNumber = Number(homeGoals);
    const awayAsNumber = Number(awayGoals);
    updateTeam({
      response,
      team: home,
      goalsFor: homeAsNumber,
      goalsAgainst: awayAsNumber,
      difference: homeAsNumber - awayAsNumber,
      points: homeAsNumber > awayAsNumber ? POINTS_WIN : homeAsNumber === awayAsNumber ? POINTS_EQUAL : POINTS_LOSE,
    });
    updateTeam({
      response,
      team: away,
      goalsFor: awayAsNumber,
      goalsAgainst: homeAsNumber,
      difference: awayAsNumber - homeAsNumber,
      points: homeAsNumber > awayAsNumber ? POINTS_LOSE : homeAsNumber === awayAsNumber ? POINTS_EQUAL : POINTS_WIN,
    });
    return response;
  }, [])
  .sort((a, b) => {
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