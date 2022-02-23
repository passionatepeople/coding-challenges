const minAndMax = (arr) => {
  min = arr[0];
  max = arr[0];
  len = arr.length
  if (len === 1) {
    return min, max
  }
  i = 1;
  for (; i < len; i++) {
    it = arr[i]
    if (it < min) min = it;
    if (it > max) max = it;
  }
  return [min, max]
};

module.exports = minAndMax;
