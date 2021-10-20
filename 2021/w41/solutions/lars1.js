const addUpWithoutTens = (n) => {
  const totalSum = (n * (n + 1)) / 2;

  const stop = 10 * ~~(n / 10)
  const terms = stop / 10 + 1
  const progressionSum = (terms / 2) * stop

  return totalSum - progressionSum;
}

module.exports = addUpWithoutTens;