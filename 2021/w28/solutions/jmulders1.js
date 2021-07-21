const largestCommonDivisor = (num1, num2) => {
  if(num1 === 0 || num1 % num2 === 0) return num2;
  if(num2 === 0 || num2 % num1 === 0) return num1;
  
  return largestCommonDivisor(num2, num1 % num2);
};

module.exports = largestCommonDivisor;
