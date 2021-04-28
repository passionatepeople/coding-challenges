// Kadane's algorithm
const getMaxConsequentItemSum = (array) => {
  let maxSum = 0;
  let currentSum = 0

  for (let i = 0; i < array.length; i++) {
    currentSum = Math.max(0, currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

module.exports = getMaxConsequentItemSum;
