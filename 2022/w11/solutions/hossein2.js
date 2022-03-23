const truncIt = (arr) => {
  let length = arr.length;

  if (length < 3) return 0;

  let min = arr[0],
    max = min,
    sum = min,
    i = 1;

  for (; i < length; ++i) {
    let item = arr[i];
    sum += item;
    if (item > max) {
      max = item;
    } else if (item < min) {
      min = item;
    }
  }

  return sum - max - min;
};

module.exports = truncIt;
