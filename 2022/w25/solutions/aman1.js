let gArr = []

const sort = arr => {
  let i = 1, len = arr.length, value, j
  for (; i < len; i++) {
      value = arr[i]
      j = i-1
      while ((j > -1) && (value < arr[j])) {
          arr[j+1] = arr[j]
          j--
      }
      arr[j+1] = value
  }
  return arr
}

const flatten = arr => {
  let i = 0, len = arr.length, value

  for (; i < len ; i++) {
    value = arr[i]
    if (Array.isArray(value))
      flatten(value)
    else
      gArr.push(value)
  }
}

module.exports = arr => {
  gArr = []
  flatten(arr)
  return sort(gArr)
}