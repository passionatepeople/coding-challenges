const truncIt = (arr) => {
  let a = arr[0], b = 0, t = 0, r = arr.length - 2;
  for (const i of arr) {
    if (a > i) a = i;
    if (b < i) b = i;
    t += i;
  }
  return r >= 1 ? t - a - b : 0;
};

module.exports = truncIt;
