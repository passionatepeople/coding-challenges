module.exports = (n) => {
  const sum = (n * (n + 1)) / 2
  const i = Math.trunc(n / 10)
  const A1 = 10
  const An = i * 10
  const sumOf10s = (i * (A1 + An)) / 2
  return sum - sumOf10s
};