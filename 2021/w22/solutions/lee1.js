
const getStandings = (matches) => {
  const standings = {};

  for (let i = 0; i < matches.length; i++) {
    standings[matches[i]["home"]] = {
      team: matches[i]["home"],
      matches: 0,
      points: 0,
      goals: { for: 0, against: 0, difference: 0 },
    };
    standings[matches[i]["away"]] = {
      team: matches[i]["away"],
      matches: 0,
      points: 0,
      goals: { for: 0, against: 0, difference: 0 },
    };
  }
  // your solution here
  for (let i = 0; i < matches.length; i++) {
    let diff = eval(matches[i].result);
    let [homeGoals, awayGoals] = matches[i].result.split("-");
    homeGoals = Number(homeGoals);
    awayGoals = Number(awayGoals);
    standings[matches[i]["home"]].matches += 1;
    standings[matches[i]["away"]].matches += 1;
    standings[matches[i]["home"]].goals.for += homeGoals;
    standings[matches[i]["away"]].goals.for += awayGoals;
    standings[matches[i]["home"]].goals.against += awayGoals;
    standings[matches[i]["away"]].goals.against += homeGoals;
    standings[matches[i]["home"]].goals.difference += homeGoals - awayGoals;
    standings[matches[i]["away"]].goals.difference += awayGoals - homeGoals;

    //home team won
    if (diff > 0) {
      standings[matches[i]["home"]].points += 3;
    }
    // away team won
    if (diff < 0) {
      standings[matches[i]["away"]].points += 3;
    }
    // draw
    if (diff == 0) {
      standings[matches[i]["home"]].points += 1;
      standings[matches[i]["away"]].points += 1;
    }
  }
  return Object.values(standings).sort((a, b) => {
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
