function largestCommonDivisor(num1, num2) {
  while (num2) {
    const t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
}

module.exports = largestCommonDivisor;
