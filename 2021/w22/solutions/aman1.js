module.exports = data => {
  let teams = [], count = -1, homeTeam, awayTeam, homeCount, awayCount

  for (let i = 0, len = data.length; i < len; i++) {
    let { home, away, result } = data[i]
    let [homeGoal, awayGoal] = result[1] === '-' ? [result[0], result[2]] : result.split('-')
    homeGoal = +homeGoal
    awayGoal = +awayGoal

    homeTeam = teams.find(v => v[0] === home)

    if (homeTeam) {
      homeTeam[2] += homeGoal
      homeTeam[3] += awayGoal
      homeTeam[6] = homeTeam[2] - homeTeam[3]
      homeTeam[5] += 1
      homeCount = homeTeam[1]
    } else {
      teams[++count] = [home, count, homeGoal, awayGoal, 0, 1, homeGoal - awayGoal]
      homeCount = count
    }

    awayTeam = teams.find(v => v[0] === away)

    if (awayTeam) {
      awayTeam[2] += awayGoal
      awayTeam[3] += homeGoal
      awayTeam[6] = awayTeam[2] - awayTeam[3]
      awayTeam[5] += 1
      awayCount = awayTeam[1]
    } else {
      teams[++count] = [away, count, awayGoal, homeGoal, 0, 1, awayGoal - homeGoal]
      awayCount = count
    }

    homeGoal === awayGoal ?
      (teams[homeCount][4] += 1, teams[awayCount][4] += 1) :
      homeGoal > awayGoal ?
        teams[homeCount][4] += 3 : teams[awayCount][4] += 3
  }

  teams.sort((a, b) =>
    b[4] !== a[4] ? b[4] - a[4] :
      b[6] !== a[6] ? b[6] - a[6] : a[0] < b[0] ? -1 : 1)

  for (let i = 0, len = teams.length; i < len; i++) {
    let v = teams[i]
    teams[i] = {
      goals: { for: v[2], against: v[3], difference: v[6] },
      points: v[4],
      matches: v[5],
      team: v[0],
    }
  }

  return teams
}
