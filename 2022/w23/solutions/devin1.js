module.exports = (a, b) => {
  const aBase = 10 ** ~~(Math.log(a) / Math.log(10));
  const bBase = 10 ** ~~(Math.log(b) / Math.log(10));
  const aFirst = ~~(a / aBase);
  const bFirst = ~~(b / bBase);
  let result = (a % aBase) + bFirst * aBase - ((b % bBase) + aFirst * bBase);
  const temp = result >> 31;
  result ^= temp;
  result += temp & 1;
  return result;
};