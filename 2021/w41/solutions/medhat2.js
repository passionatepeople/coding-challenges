module.exports = (n) => {
  const tens = ~~(n / 10);
  const sumAll = (n * (n + 1)) / 2;
  return sumAll - tens * (tens + 1) * 5;
};
