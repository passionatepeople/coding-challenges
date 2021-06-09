// Yes this is slow and not optimised at all ¯\_(ツ)_/¯
// Could be interested to see my first approach to solve this
const getStandings = (matches) => {
  const data = new Map()

  matches.forEach(({home, away, result}) => {
    const homeCache = data.get(home)
    const awayCache = data.get(away)

    const [homeGoals, awayGoals] = result.split('-')
    const homeInt = parseInt(homeGoals)
    const awayInt = parseInt(awayGoals)

    const homeWon = homeInt > awayInt
    const tied = homeInt === awayInt 

    const homePoints = !tied ? (homeWon ? 3 : 0) : 1;
    const awayPoints = !tied ? (!homeWon ? 3 : 0) : 1;

    const homeForGoals = homeCache ? homeCache.goals.for + homeInt : homeInt
    const homeAgainstGoals = homeCache ? homeCache.goals.against + awayInt : awayInt
    const homeDiff = homeForGoals - homeAgainstGoals

    data.set(home, {
      team: home,
      matches: homeCache ? homeCache.matches + 1 : 1,
      points: homeCache ? homeCache.points + homePoints : homePoints,
      goals: {
        for: homeForGoals,
        against: homeAgainstGoals,
        difference: homeDiff
      }
    })

    const awayForGoals = awayCache ? awayCache.goals.for + awayInt : awayInt
    const awayAgainstGoals = awayCache ? awayCache.goals.against + homeInt : homeInt
    const awayDiff = awayForGoals - awayAgainstGoals

    data.set(away, {
      team: away,
      matches: awayCache ? awayCache.matches + 1 : 1,
      points: awayCache ? awayCache.points + awayPoints : awayPoints,
      goals: {
        for: awayForGoals,
        against: awayAgainstGoals,
        difference: awayDiff
      }
    })
  })

  return [...data.values()].sort((a,b) => {
    if (a.points > b.points) return -1
    if (a.points < b.points) return 1
    if (a.goals.difference < b.goals.difference) return 1
    if (a.goals.difference > b.goals.difference) return -1
    return (a.team < b.team ? -1 : (a.team > b.team ? 1 : 0));
  })
};

module.exports = getStandings;
