const largestCommonDivisor = (num1, num2) => {
  for (; num2 > 0;) {
    const mod = num1 % num2;
    num1 = num2;
    num2 = mod;
  }

  return num1;
};

module.exports = largestCommonDivisor;
