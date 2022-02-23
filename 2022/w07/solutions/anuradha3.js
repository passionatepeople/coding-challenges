const minAndMax = (arr, min = arr[0], len = arr.length) => {
  let max = min;
  for (let i = 1; i < len; i++) {
    const curr = arr[i];
    if (curr < min) min = curr;
    else if (curr > max) max = curr;
  }
  return [min, max];
};

module.exports = minAndMax;