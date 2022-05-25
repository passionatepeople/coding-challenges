const includes = Array.prototype.includes,
  startCache = new Map(),
  endCache = new Map(),
  combCounts = [1, 9, 81, 729];

function countWithoutFives(num, isStart) {
  let count = 0,
    digits = new Array(4),
    length = 0;

  while (num > 9) {
    digits[length++] = num % 10;
    num = (num / 10) << 0;
  }
  digits[length++] = num;

  for (let i = 0; i < length; ++i) {
    let d = digits[i];

    if (!includes.call(digits, 5, i + 1)) {
      let comb = d + 1 - (i > 0 || d == 5 ? 1 : 0) - (d > 5 ? 1 : 0);
      count += comb * combCounts[i];
    }
  }

  if (isStart && !includes.call(digits, 5)) {
    return count - 1;
  }

  return count;
}

const withoutFives = (start, end) => {
  return (
    (endCache.get(end) || endCache.set(end, countWithoutFives(end, false)).get(end)) -
    (startCache.get(start) || startCache.set(start, countWithoutFives(start, true)).get(start))
  );
};

module.exports = withoutFives;