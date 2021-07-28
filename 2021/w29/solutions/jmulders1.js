const chopMeUp = (string, n = 2, s = '_') => {
  const res = [];
  const { length } = string;
  let diff = length % n;

  if (diff) {
    for (; diff < n; diff++) {
      string += s;
    }
  }

  for (let i = 0; i < length; i += n) {
    res.push(string.slice(i, i + n));
  }

  return res;
};

module.exports = chopMeUp;

