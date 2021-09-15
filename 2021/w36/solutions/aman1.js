module.exports = array => {
  let min = Infinity, value, i, len
  for (i = 0, len = array.length; i < len; i++) {
    value = array[i]
    min > value && Math.floor(value) === value && (min = value)
  }
  return min
}
