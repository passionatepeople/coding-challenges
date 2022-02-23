const minAndMax = (arr) => {
  let min = 99
  let max = -100
  const length = arr.length

  for (let i = 0; i < length; i++) {
    const val = arr[i]
    if (val > max) {
      max = val
    }
    if (val < min) {
      min = val
    }
  }

  return [min, max];
};

module.exports = minAndMax;
