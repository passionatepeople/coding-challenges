const addUpWithoutTens = (n) => {
  let sum = (n * (n + 1)) / 2;
  for (let i = 10; i <= n; i += 10) {
    sum -= i;
  }
  return sum;
};

module.exports = addUpWithoutTens;
