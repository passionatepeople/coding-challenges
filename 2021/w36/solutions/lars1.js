const LOW = 9999
const findMinInt = (array) => {
  const length = array.length
  let low = LOW
  let i = 0
  for (i; i < length; i++) {
    if (Number.isInteger(array[i]) && array[i] < low) {
      low = array[i]
    }
  }
  return low;
};

module.exports = findMinInt;