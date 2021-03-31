const rev = (n) => {
  let r = 0
  while (n) {
      r *= 10;
      r += n % 10;
      n = n / 10 | 0;
  }
  return r;
}

const sum = (n) => {
  let s = 0
  while (n) {
      s += n % 10
      n = n / 10 | 0
  }
  return s
}

const manipulateNumber = (number) => sum(number - rev(number));

module.exports = manipulateNumber;