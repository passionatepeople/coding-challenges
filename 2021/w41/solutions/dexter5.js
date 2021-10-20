const addUpWithoutTens = (n) => {
  const m = n + 1
  const sum = n % 2 ? n * (m >> 1) : (n >> 1) * m
  const tens = 0 | n / 10
  const tensSum = tens * (tens + 1) * 5
  return sum - tensSum
};

module.exports = addUpWithoutTens;
