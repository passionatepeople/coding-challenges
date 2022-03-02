const getMinIndex = (arr, len) => {
  let i, minVal = arr[0], val, index = 0

  if (len === 2) return minVal < arr[1] ? 0 : 1

  for (i = 1; i < len; i++) {
    val = arr[i]
    if (val < minVal) {
      minVal = val
      index = i
    }
  }

  return index
},

getMax = (arr, len) => {
  let i, maxVal = arr[0], val

  for (i = 1; i < len; i++) {
    val = arr[i]
    if (val > maxVal) maxVal = val
  }

  return maxVal
};

module.exports = (arr, tills) => {
  let i, len = arr.length, total = arr[0]

  if (tills == 1) {
    for (i = 1; i < len; i++) total += arr[i]
    return total
  }

  if (tills > len) return getMax(arr, len)

  let tillTimes = new Array(tills), val, index

  for (i = 0; i < len; i++) {
    val = arr[i]

    if (i < tills) {
      tillTimes[i] = val
      continue
    }

    index = getMinIndex(tillTimes, tills)
    tillTimes[index] += val
  }

  return getMax(tillTimes, tills)
}
