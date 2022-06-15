module.exports = (a, b) => {
  const aBase = 10 ** ~~(Math.log(a) / 2.30258509299);
  const bBase = 10 ** ~~(Math.log(b) / 2.30258509299);
  const aFirst = ~~(a / aBase);
  const bFirst = ~~(b / bBase);
  let result = (a % aBase) + bFirst * aBase - ((b % bBase) + aFirst * bBase);
  const temp = result >> 31;
  result ^= temp;
  result += temp & 1;
  return result;
};