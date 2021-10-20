module.exports = (n) => {
  let m = ~~(n / 10);
  return (n * (n + 1)) / 2 - 5 * m * (m + 1);
};
