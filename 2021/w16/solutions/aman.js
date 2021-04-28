const getMaxConsequentItemSum = (array) => {
  let sum1 = 0, sum2 = 0;

  for (let i = 0, len = array.length; i < len; i++) {
    sum1 += array[i];

    if (sum1 < 0) {
      sum1 = 0;
    }

    if (sum1 > sum2) {
      sum2 = sum1;
    }
  }

  return sum2;
};

module.exports = getMaxConsequentItemSum;
