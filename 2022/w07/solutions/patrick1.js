const minAndMax = (arr) => {
  if (arr.length === 1) {
    return [arr[0], arr[0]]
  }

  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);

  return [min, max];
};

module.exports = minAndMax;
