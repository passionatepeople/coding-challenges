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

  for (let { home, away, result } of matches) {
    const [pHome, pAway] = result.split('-').map(Number)

    countScore(standings[home] = standings[home] || createTeam(home), pHome, pAway)
    countScore(standings[away] = standings[away] || createTeam(away), pAway, pHome)
  }

  return Object.values(standings)
    .sort((a, b) =>
      b.points - a.points
      || b.goals.difference - a.goals.difference
      || (b.team < a.team ? 1 : -1)
    )
};

module.exports = getStandings;
