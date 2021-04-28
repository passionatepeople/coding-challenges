const sum = numbers => {
  let count = 0;
  for (k = numbers.length; k--;) {
    count += numbers[k];
  }
  return count
}

const getMaxConsequentItemSum = (array) => {
  const sums = [];
  const limit = array.length;
  for (i = 0; i <= limit; i++) {
    for (j = i + 1; j <= limit; j++) {
      sums.push(sum(array.slice(i, j)));
    }
  }
  return Math.max(0, ...sums);
};

module.exports = getMaxConsequentItemSum;
