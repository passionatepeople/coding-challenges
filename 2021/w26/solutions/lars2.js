const permute = (str, prefix, res) => {
  if (str.length == 0) {
    res.add(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      permute(rem, prefix + str[i], res);
    }
  }
};

module.exports = (s) => {
  const res = new Set();
  permute(s, "", res);
  return [...res];
};
