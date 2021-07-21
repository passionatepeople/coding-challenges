const largestCommonDivisor = (a, b) => {
  let temp,
    x = a,
    y = b;
    
  while (y) {
    temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

module.exports = largestCommonDivisor;