const largestCommonDivisor = (num1, num2) => {

  if (!num2) {
    return num1;
  }

  return largestCommonDivisor(num2, num1 % num2);
  
};

module.exports = largestCommonDivisor;
