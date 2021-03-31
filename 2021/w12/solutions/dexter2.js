module.exports = (a, b = 0, c = 0, d = 0, each=(n, fn) => {
  while (n > 0) {
    fn(n % 10);
    n = Math.floor(n / 10);
  }
}) => {
  each(a, n=>b=b*10+n)
  c=a-b
  each(Math.abs(c), n=>d+=n)
  return d*Math.sign(c);
};
