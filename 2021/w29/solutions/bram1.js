const chopMeUp = (string, n = 2, s = '_') => {
  let res = [];

  const modulus = string.length % n;
  const missing = modulus ? n - modulus : 0;

  for (let i = 0; i < missing; i++) {
    string += s;
  }

  for (let i = 0; i < string.length; i += n) {
    const chunk = string.slice(i, i + n);
    res.push(chunk);
  }

  return res;
};

module.exports = chopMeUp;
