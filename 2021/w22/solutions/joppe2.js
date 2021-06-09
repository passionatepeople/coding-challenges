const createTeam = (team) => {
  return {
    team,
    matches: 0,
    points: 0,
    for: 0,
    against: 0,
  };
};

const sorter = (a, b) => {
  const pointsDiff = a.points - b.points;

  if (pointsDiff > 0) {
    return -1;
  }

  if (pointsDiff < 0) {
    return 1;
  }

  const goalsDiff = a.goals.difference - b.goals.difference;

  if (goalsDiff > 0) {
    return -1;
  }

  if (goalsDiff < 0) {
    return 1;
  }

  return a.team > b.team ? 1 : -1;
};

const getResult = (match) => {
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
    hg,
    ag,
    hp,
    ap,
  };
};

const transform = (team) => {
  return {
    team: team.team,
    matches: team.matches,
    points: team.points,
    goals: {
      for: team.for,
      against: team.against,
      difference: team.for - team.against,
    },
  };
};

const getStandings = (matches) => {
  const table = {};
  const list = [];

  for (const match of matches) {
    const result = getResult(match);

    let home = table[match.home];
    let away = table[match.away];

    if (!home) {
      home = createTeam(match.home);
      list.push(home);
    }

    if (!away) {
      away = createTeam(match.away);
      list.push(away);
    }

    home.matches += 1;
    home.points += result.hp;
    home.for += result.hg;
    home.against += result.ag;

    away.matches += 1;
    away.points += result.ap;
    away.for += result.ag;
    away.against += result.hg;

    table[match.home] = home;
    table[match.away] = away;
  }

  return list.map(transform).sort(sorter);
};

module.exports = getStandings;
