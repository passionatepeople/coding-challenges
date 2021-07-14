module.exports = (array) => {
  const sum = numbers => numbers.reduce((a, i) => a + i, 0)
  const limit = array.length
  for (let i = 0; i < limit; i ++) {
    if (sum(array.slice(0, i)) === sum(array.slice(i + 1))) return i;
  }
  return -1;
}
