const findMinInt = (array) => {
  let length = array.length
  let low = Infinity

  while(length--) {
    if (Number.isInteger(array[length]) && array[length] < low) {
      low = array[length]
    }
  }

  return low;
};

module.exports = findMinInt;
