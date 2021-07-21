const largestCommonDivisor = (x, y) => {
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

module.exports = largestCommonDivisor;
