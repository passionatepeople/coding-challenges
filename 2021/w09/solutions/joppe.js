const rgb2Hex = (r, g, b) => {
  // your solution here
  const toHex = (n) => n.toString(16);

  const truncate = (n) => Math.min(255, Math.max(0, n));

  const pad = (s) => `0${s}`.substring(s.length - 1);

  const format = (s) => s.toUpperCase();

  const pipe = (...fns) => (v) => fns.reduce((acc, fn) => fn(acc), v);

  const transform = pipe(truncate, toHex, pad, format);

  return `#${[r, g, b].map(transform).join('')}`;
};

module.exports = rgb2Hex;
