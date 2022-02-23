const minAndMax = (arr) => {
  let min = arr[0], max = min;
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    if (curr < min) min = curr;
    else if (curr > max) max = curr;
  }
  return [min, max];
};

module.exports = minAndMax;