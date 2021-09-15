const findMinInt = (array) => {
  let length = array.length,
    min = 6258;
  for (; length--; ) {
    let num = array[length];
    if (num < min && parseInt(num) == num) {
      min = num;
    }
  }
  return min;
};

module.exports = findMinInt;
