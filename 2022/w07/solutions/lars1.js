const minAndMax = (arr) => {
  let min, max
  const length = arr.length

  const initMin = arr[0]
  const initMax = arr[1]
  if (initMin > initMax) {
    min = initMax
    max = initMin
  } else {
    min = initMin
    max = initMax
  }

  for (let i = 2; i < length; i++) {
    const val = arr[i]
    if (val > max) {
      max = val
      continue;
    }
    if (val < min) {
      min = val
    }
  }

  return [min, max];
};

module.exports = minAndMax;
