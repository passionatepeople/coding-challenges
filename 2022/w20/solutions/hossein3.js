const includes = Array.prototype.includes;

function countWithoutFives(num, isStart) {
  let count = 0,
    prevComb = 1,
    digits = new Array(6),
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
      count += comb * prevComb;
    }

    prevComb *= 9;
  }

  if (isStart) {
    return count - (includes.call(digits, 5) ? 0 : 1);
  }

  return count;
}

const withoutFives = (start, end) => {
  return countWithoutFives(end, false) - countWithoutFives(start, true);
};

module.exports = withoutFives;