const findMinInt = (array) => {
  let min, i, val;
  for (i = 0; i < array.length; i++) {
    val = array[i];
    if (Math.floor(val) === val) {
      if (min === undefined || val < min) min = val;
    }
  }
  return min;
};

module.exports = findMinInt;
