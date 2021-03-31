const reverse = (n) => {
  let o = '';
  const s = n + '';

  for (let i = s.length - 1; i >= 0; i--) {
      o += s[i];
  }

  return +o;
};

const diff = (a, b) => {
  return a - b;
};

const sign = (n) => {
  return n >= 0 ? 1 : -1;
};

const sum = (n) => {
  let o = 0;
  const s = n + '';

  for (let i = s.length - 1; i >= 0; i--) {
      o += +s[i];
  }

  return o;
};

const manipulateNumber = (a) => {
  // your solution here
  const b = reverse(a);
  const c = diff(a, b);
  const s = sign(c);
  const d = sum(c * s);

  return d * s;
};

module.exports = manipulateNumber;
