const largestCommonDivisor = (num1, num2) => {
  // find the min and max values and return the divisor of both values
  let x = Math.max(num1, num2);
  let y = Math.min(num1, num2);
  
  while (x % y !== 0) {
    let temp = x % y;
    x = y; y = temp;
  }
  return y;
};

module.exports = largestCommonDivisor;