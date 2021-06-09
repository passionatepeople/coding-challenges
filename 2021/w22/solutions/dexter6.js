
const getStandings = (matches)  => {
  const standings = {}

  for (let match of matches) {
    const result = match.result.split('-').map(Number)
    
    const home = standings[match.home] = standings[match.home] || [0,0,0,0]
    const away = standings[match.away] = standings[match.away] || [0,0,0,0]

    const points = result[0] > result[1] ? 3 : result[0] < result[1] ? 0 : 1

    home[0] ++
    away[0] ++
    home[1] += points
    away[1] += points ? points === 1 ? 1 : 0 : 3
    home[2] += result[0]
    away[2] += result[1]
    home[3] += result[1]
    away[3] += result[0]
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
