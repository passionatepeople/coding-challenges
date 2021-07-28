const chopMeUp = (string, n = 2, s = '_') => {
  const fill = string.length % n;

  if (fill) {
    string += s.repeat(n - fill);
  }

  const len = Math.ceil(string.length / n);
  const arr = Array(len);

  for (let i = 0, j = 0; i < len; i++, j += n) {
    arr[i] = string.substr(j, n);
  }

  return arr;
};

module.exports = chopMeUp;
