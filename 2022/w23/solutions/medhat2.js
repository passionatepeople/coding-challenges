const swappedDiff = (first, second) => {
  const multiFirst =
      first >= 100000
        ? 100000
        : first >= 10000
        ? 10000
        : first >= 1000
        ? 1000
        : first >= 100
        ? 100
        : 10,
    multiSecond =
      second >= 100000
        ? 100000
        : second >= 10000
        ? 10000
        : second >= 1000
        ? 1000
        : second >= 100
        ? 100
        : 10;

  let newFirst = ~~(second / multiSecond) * multiFirst + (first % multiFirst);
  let newSecond = ~~(first / multiFirst) * multiSecond + (second % multiSecond);

  return Math.abs(newFirst - newSecond);
};

module.exports = swappedDiff;