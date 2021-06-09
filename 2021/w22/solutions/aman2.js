// slightly readable one ^_^
const FOR = 2, AGAINST = 3, POINTS = 4, MATCHES = 5, DIFF = 6

module.exports = data => {
  let teams = [], count = -1

  for (let i = 0, len = data.length; i < len; i++) {
    let { home, away, result } = data[i]
    let [homeGoal, awayGoal] = result[1] === '-' ? [result[0], result[2]] : result.split('-')
    homeGoal = +homeGoal
    awayGoal = +awayGoal

    const teamHome = teams.find(v => v[0] === home)
    let homeCount = null, awayCount = null

    if (!teamHome) {
      count++
      teams[count] = [home, count, homeGoal, awayGoal, 0, 1, homeGoal - awayGoal]
      homeCount = count
    } else {
      teamHome[FOR] += homeGoal
      teamHome[AGAINST] += awayGoal
      teamHome[DIFF] = teamHome[FOR] - teamHome[AGAINST]
      teamHome[MATCHES] += 1
      homeCount = teamHome[1]
    }

    const teamAway = teams.find(v => v[0] === away)

    if (!teamAway) {
      count++
      teams[count] = [away, count, awayGoal, homeGoal, 0, 1, awayGoal - homeGoal]
      awayCount = count
    } else {
      teamAway[FOR] += awayGoal
      teamAway[AGAINST] += homeGoal
      teamAway[DIFF] = teamAway[FOR] - teamAway[AGAINST]
      teamAway[MATCHES] += 1
      awayCount = teamAway[1]
    }

    if (homeGoal === awayGoal) {
      teams[homeCount][POINTS] += 1
      teams[awayCount][POINTS] += 1
    } else if (homeGoal > awayGoal) {
      teams[homeCount][POINTS] += 3
    } else if (awayGoal > homeGoal) {
      teams[awayCount][POINTS] += 3
    }
  }

  return teams
    .sort((a, b) => {
      if (b[POINTS] === a[POINTS]) {
        if (b[DIFF] !== a[DIFF]) return b[DIFF] - a[DIFF]
        if (a[0] < b[0]) return -1
        if (a[0] > b[0]) return 1
      }

      return b[POINTS] - a[POINTS]
    })
    .map(v => ({
      goals: { for: v[FOR], against: v[AGAINST], difference: v[DIFF] },
      points: v[POINTS],
      matches: v[MATCHES],
      team: v[0],
    }))
}
