const hasItAll = (n) => {
  const res = new Set();
  for (let i = 0; i < n.length; i++) {
    const code = n[i].charCodeAt(0);
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      res.add(code % 32);
    }
  }
  return res.size === 26;
};

module.exports = hasItAll;
