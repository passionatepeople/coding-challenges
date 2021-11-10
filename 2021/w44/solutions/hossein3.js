const offWithIt = (arr) => {
  let length = arr.length,
    i = 1,
    index = 0,
    min = arr[0],
    item;

  for (; i < length; i++) {
    item = arr[i];
    if (item < min) {
      min = item;
      index = i;
    }
  }

  return arr.filter((_, i) => i != index);
};

module.exports = offWithIt;
