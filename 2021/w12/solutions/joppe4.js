const reverse = (n) => {
  let r = 0;

  while (n != 0) {
      r *= 10;
      r += n % 10;
      n = (n / 10) | 0;
  }

  return r;
};

const sum = (n) => {
  let o = 0;

  while (n != 0) {
      o += n % 10;
      n = (n / 10) | 0;
  }

  return o;
};

const manipulateNumber = (a) => {
  // your solution here
  const b = reverse(a);
  const c = a - b;
  const s = c < 0 ? -1 : 1;
  const d = sum(c * s);

  return d * s;
};

module.exports = manipulateNumber;
