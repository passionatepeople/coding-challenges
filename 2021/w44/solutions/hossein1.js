const offWithIt = (arr) => {
  let i = arr.length - 1,
    index = i,
    min = arr[i],
    item;

  while (i--) {
    item = arr[i];
    if (item <= min) {
      min = item;
      index = i;
    }
  }
  return arr.filter((_, i) => i != index);
};

module.exports = offWithIt;
