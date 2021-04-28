const getMaxConsequentItemSum = (array) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      let sequenceSum = 0;

      for (let j = i; j < array.length; j++) {
        sequenceSum += array[j];

        if (sequenceSum > result) {
          result = sequenceSum;
        }
      }
    }
  }

  return result;
};

module.exports = getMaxConsequentItemSum;