const getMaxConsequentItemSum = (array) => {
  let maxSum = 0;
  const { length } = array;

  for (let i = 0; i < length; i++) {
    let tempSum = 0;
    for (let k = i; k < length; k++) {
      tempSum += array[k];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
  }

  return maxSum;
};

module.exports = getMaxConsequentItemSum;
