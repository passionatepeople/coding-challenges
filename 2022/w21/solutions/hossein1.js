const iStandOut = (numbers) => {
  var l = 0,
    r = numbers.length - 1,
    rem = numbers[0] & 1;

  if (rem == (numbers[r] & 1)) {
    while (l < r) {
      if ((numbers[++l] & 1) !== rem) {
        return numbers[l];
      }
      if ((numbers[--r] & 1) !== rem) {
        return numbers[r];
      }
    }
  }

  return rem === (numbers[1] & 1) ? numbers[r] : numbers[0];
};

module.exports = iStandOut;