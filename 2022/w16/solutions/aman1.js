const map3 = [0, 1000, 200, 300, 400, 500, 600],
      map = [0, 100, 0, 0, 0, 50, 0]

module.exports = arr => {
  let count = [0, 0, 0, 0, 0, 0, 0],
      total = 0,
      d,
      i = 0,
      len = arr.length

  for (; i < len; i++) {
    d = arr[i]
    count[d]++

    if (count[d] === 3) {
      total += map3[d]
      total -= map[d] * 2
    } else
      total += map[d]
  }

  return total
}