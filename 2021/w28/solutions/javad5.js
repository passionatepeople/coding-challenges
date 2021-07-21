const largestCommonDivisor = (x, y) => {
  let temp;
  while (true) {
    temp = y;
    y = x % y;
    x = temp;
    if (!y) return x;
  }
};

module.exports = largestCommonDivisor;
