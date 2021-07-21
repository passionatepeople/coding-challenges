const largestCommonDivisor = (num1, num2) => {
  return num2 > 0 ? largestCommonDivisor(num2, num1 % num2) : num1;
};

module.exports = largestCommonDivisor;
