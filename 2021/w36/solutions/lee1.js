const isInteger = Number.isInteger;

const findMinInt = (array) => {
  // your solution here
  let currentSmallest;
  for (i = 0; i < array.length; i++) {
    if (isInteger(array[i])) {
      if (!currentSmallest || currentSmallest > array[i]) {
        currentSmallest = array[i];
      }
    }
  }

  return currentSmallest;
};

module.exports = findMinInt;
