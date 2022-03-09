const goAround = (str) => {
  const res = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    res[i] = str.slice(i + 1) + str.substring(0, i + 1);
  }

  return res;
};

module.exports = goAround;
