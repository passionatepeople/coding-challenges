function countWithoutFives(num) {
  let count = 0,
    prevComb = 1,
    digits = [];

  while (num) {
    digits.push(num % 10);
    num = (num / 10) << 0;
  }

  for (let i = 0, il = digits.length; i < il; ++i) {
    let d = digits[i];

    if (digits.indexOf(5, i + 1) == -1) {
      let comb = d + 1 - (i > 0 || d == 5 ? 1 : 0) - (d > 5 ? 1 : 0);
      count += comb * prevComb;
    }

    prevComb *= 9;
  }

  return { count, has5: digits.includes(5), __proto__: null };
}

const withoutFives = (start, end) => {
  let eCount = countWithoutFives(end),
    sCount = countWithoutFives(start),
    isDoubleCounted = sCount.has5 || start == 0;

  return eCount.count - sCount.count + (isDoubleCounted ? 0 : 1);
};

module.exports = withoutFives;