const createTeam = (team) => ({
  team,
  matches: 0,
  points: 0,
  goals: { for: 0, against: 0, difference: 0}
})
const countScore = (team, points, against) => {
  team.matches ++
  team.points += points > against ? 3 : points < against ? 0 : 1
  team.goals.for += points
  team.goals.against += against
  team.goals.difference += points - against
}
const getStandings = (matches)  => {
  const standings = {}

  for (let match of matches) {
    const result = match.result.split('-').map(Number)

    countScore(standings[match.home] = standings[match.home] || createTeam(match.home), result[0], result[1])
    countScore(standings[match.away] = standings[match.away] || createTeam(match.away), result[1], result[0])
  }

  return Object.values(standings)
    .sort((a, b) =>
      b.points - a.points
      || b.goals.difference - a.goals.difference
      || (b.team < a.team ? 1 : -1)
    )
};

module.exports = getStandings;
