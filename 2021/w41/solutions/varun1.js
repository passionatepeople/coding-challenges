const addUpWithoutTens = (n) => {
  const sum = n * (n + 1) / 2;
  const ten = Math.floor(n / 10);

  return sum - (ten * (ten + 1) / 2 * 10)
};

module.exports = addUpWithoutTens;
