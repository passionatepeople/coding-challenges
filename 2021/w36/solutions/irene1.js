const findMinInt = (array) => {
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value < smallest && value % 1 === 0) {
      smallest = value;
    }
  }

  return smallest;
};

module.exports = findMinInt;