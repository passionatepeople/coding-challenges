function largestCommonDivisor(num1, num2) {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num1;
}

module.exports = largestCommonDivisor;
