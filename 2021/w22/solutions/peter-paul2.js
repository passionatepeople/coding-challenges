const getStandings = (matches) => {
  const results = [];
  const teams = new Map();

  const update = (team, goals, counterGoals) => {
    let result;
    if (teams.has(team)) {
      result = teams.get(team);
    } else {
      result = {
        team,
        matches: 0,
        points: 0,
        goals: { for: 0, against: 0, difference: 0 },
      };
      teams.set(team, result);
      results.push(result);
    }
    result.matches += 1;
    result.points += goals > counterGoals ? 3 : goals == counterGoals ? 1 : 0;
    result.goals.for += goals;
    result.goals.against += counterGoals;
    result.goals.difference += goals - counterGoals;
  };

  for ({ home, away, result } of matches) {
    const [homeGoals, awayGoals] = result.split("-");
    update(home, +homeGoals, +awayGoals);
    update(away, +awayGoals, +homeGoals);
  }

  return results.sort(
    (a, b) =>
      b.points - a.points ||
      b.goals.difference - a.goals.difference ||
      (b.team < a.team ? 1 : -1)
  );
};

module.exports = getStandings;