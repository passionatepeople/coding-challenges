
const getStandings = (matches)  => {
  const standings = {}

  for (let match of matches) {
    const result = match.result.split('-').map(Number)
    
    standings[match.home] = team = standings[match.home] || [0,0,0,0]
    team[0] ++
    team[1] += result[0] > result[1] ? 3 : result[0] < result[1] ? 0 : 1
    team[2] += result[0]
    team[3] += result[1]
    standings[match.away] = team = standings[match.away] || [0,0,0,0]
    team[0] ++
    team[1] += result[1] > result[0] ? 3 : result[1] < result[0] ? 0 : 1
    team[2] += result[1]
    team[3] += result[0]
  }

  return Object.entries(standings)
    .map(([team, [matches, points, f, against]]) => ({ team, matches, points, goals: { for:f, against, difference: f-against }}))
    .sort((a, b) =>
      b.points - a.points
      || b.goals.difference - a.goals.difference
      || (b.team < a.team ? 1 : -1)
    )
};

module.exports = getStandings;
