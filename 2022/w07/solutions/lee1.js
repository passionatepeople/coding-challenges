const minAndMax = (arr) => {
  const res = [arr[0], arr[0]];
  if (arr.length === 1) return res;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < res[0]) {
      res[0] = arr[i];
      continue;
    }
    if (arr[i] > res[1]) {
      res[1] = arr[i];
    }
  }

  return res;
};

module.exports = minAndMax;
