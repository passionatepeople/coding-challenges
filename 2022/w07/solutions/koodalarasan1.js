const minAndMax = (arr) => {
  let min = arr[0],
    max = arr[0],
    i = 1,
    len = arr.length;
  let curr;
  for (;len > i;i++) {
    curr = arr[i];
    min = curr < min ? curr : min;
    max = curr > max ? curr : max;
  }

  return [min, max];
};

module.exports = minAndMax;
