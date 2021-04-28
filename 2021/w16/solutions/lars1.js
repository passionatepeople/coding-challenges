const getMaxConsequentItemSum = (array) => {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] + sum < array[i]) {
      sum = array[i];
    } else {
      sum += array[i];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
};

module.exports = getMaxConsequentItemSum;