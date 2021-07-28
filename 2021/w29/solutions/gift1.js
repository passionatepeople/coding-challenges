const chopMeUp = (string, n, s) => {
  !n ? (n = 2) : n;
  !s ? (s = '_') : s;
  let result = string.match(new RegExp('.{1,' + n + '}', 'g')) || [];
  const len = result[result.length - 1].length;
  const lastItem = result[result.length - 1];
  if (len < n) {
    const char = s.repeat(n - len);
    result[result.length - 1] = lastItem + char;
  }
  return result;
};
module.exports = chopMeUp;