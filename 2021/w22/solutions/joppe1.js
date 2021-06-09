function createTeam(team) {
  return {
    team,
    matches: 0,
    points: 0,
    goals: { for: 0, against: 0, difference: 0 },
  };
}

function getResult(match) {
  const [hg, ag] = match.result.split('-').map(Number);
  const diff = hg - ag;
  let hp = 1;
  let ap = 1;

  if (diff < 0) {
    hp = 0;
    ap = 3;
  } else if (diff > 0) {
    hp = 3;
    ap = 0;
  }

  return {
    home: {
      points: hp,
      for: hg,
      against: ag,
    },
    away: {
      points: ap,
      for: ag,
      against: hg,
    },
  };
}

const getStandings = (matches) => {
  const table = matches.reduce((acc, match) => {
    const result = getResult(match);

    if (acc[match.home] === undefined) {
      acc[match.home] = createTeam(match.home);
    }

    if (acc[match.away] === undefined) {
      acc[match.away] = createTeam(match.away);
    }

    acc[match.home].matches += 1;
    acc[match.home].points += result.home.points;
    acc[match.home].goals.for += result.home.for;
    acc[match.home].goals.against += result.home.against;
    acc[match.home].goals.difference =
      acc[match.home].goals.for - acc[match.home].goals.against;

    acc[match.away].matches += 1;
    acc[match.away].points += result.away.points;
    acc[match.away].goals.for += result.away.for;
    acc[match.away].goals.against += result.away.against;
    acc[match.away].goals.difference =
      acc[match.away].goals.for - acc[match.away].goals.against;

    return acc;
  }, {});

  return Object.values(table).sort((a, b) => {
    if (a.points > b.points) {
      return -1;
    } else if (a.points === b.points) {
      if (a.goals.difference > b.goals.difference) {
        return -1;
      } else if (a.goals.difference === b.goals.difference) {
        return a.team > b.team ? 1 : -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  });
};

module.exports = getStandings;
