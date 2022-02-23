const minAndMax = (arr) => {
  let len = arr.length,
    min = arr[0],
    max = arr[0],
    i = 1;

  while (i < len) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    ++i;
  }

  return [min, max];
};

module.exports = minAndMax;
