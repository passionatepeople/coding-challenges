const largestCommonDivisor = (num1, num2) => {
  while(num2) {
    let tempDivisor = num2;
    num2 = num1 % num2;
    num1 = tempDivisor;
  }
  return num1;
}

module.exports = largestCommonDivisor;
