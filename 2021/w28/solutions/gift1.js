const largestCommonDivisor = (num1, num2) => {
  // find the divisor of both numbers
  let divisor = Math.min(num1, num2);
  while (divisor > 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    divisor--;
  }
  return 1;
};

module.exports = largestCommonDivisor;
