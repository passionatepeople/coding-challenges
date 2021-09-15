const findMinInt = (array) => {
  let min;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 1 === 0) {
      if (min === undefined || array[i] < min) min = array[i];
    }
  }
  return min;
};

module.exports = findMinInt;