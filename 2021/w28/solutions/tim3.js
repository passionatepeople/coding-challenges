const largestCommonDivisor = (x, y) => {
  if (!y) {
    return x;
  }
  return largestCommonDivisor(y, x % y);
};

module.exports = largestCommonDivisor;
