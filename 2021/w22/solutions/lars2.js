const comparer = (a,b) => {
  if (a.points > b.points) return false
  if (a.points < b.points) return true
  if (a.goals.difference < b.goals.difference) return true
  if (a.goals.difference > b.goals.difference) return false
  return a.team > b.team
}

const insertionSort = (array) => {
  const length = array.length;
  let tmp, i, j;

  for (i = 0; i < length; i++) {
    tmp = array[i]
    j = i - 1

    while (j >= 0 && comparer(array[j], tmp)) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = tmp
  }
  return array
}

const getStats = (team, cache, points, goalsFor, goalsAgainst) => {
  const goals = cache ? cache.goals.for + goalsFor : goalsFor
  const against = cache ? cache.goals.against + goalsAgainst : goalsAgainst
  const diff = goals - against

  return {
    team,
    matches: cache ? cache.matches + 1 : 1,
    points: cache ? cache.points + points : points,
    goals: {
      for: goals,
      against,
      difference: diff
    }
  }
}

const getStandings = (matches) => {
  const data = new Map()
  const length = matches.length

  for (let i = 0; i < length; i++) {
    const { home, away, result } = matches[i];

    const [homeGoals, awayGoals] = result.split('-')
    const homeInt = homeGoals >> 0
    const awayInt = awayGoals >> 0

    const homeWon = homeInt > awayInt
    const tied = homeInt === awayInt 

    const homePoints = !tied ? (homeWon ? 3 : 0) : 1;
    const awayPoints = !tied ? (!homeWon ? 3 : 0) : 1;

    data.set(home, getStats(home, data.get(home), homePoints, homeInt, awayInt))
    data.set(away, getStats(away, data.get(away), awayPoints, awayInt, homeInt))
  }

  return insertionSort([...data.values()])
};

module.exports = getStandings;
