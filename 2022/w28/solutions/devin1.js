module.exports = (ip1, ip2) => {
  const [f1, f2, f3, f4] = ip1.split(/\D/);
  const first = +f1 * 16777216 + +f2 * 65536 + +f3 * 256 + +f4;
  const [s1, s2, s3, s4] = ip2.split(/\D/);
  const second = +s1 * 16777216 + +s2 * 65536 + +s3 * 256 + +s4;
  return second - (first + 1);
};