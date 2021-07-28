const chopper = (s, n) => s.match(new RegExp(`.{1,${n}}`, "g"));
const pick = (a, i) => a[i];
const pickLast = (a) => pick(a, a.length - 1);
const padRight = (s, n, c) => s.padEnd(n, c);
const replace = (a, i, v) => {
  const b = a.slice();
  b[i] = v;
  return b;
};
const replaceLast = (a, v) => replace(a, a.length - 1, v);
const padRightLast = (a, n, c) => replaceLast(a, padRight(pickLast(a), n, c));

module.exports = (string, n = 2, s = "_") =>
  padRightLast(chopper(string, n), n, s);
