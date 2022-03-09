const goAround = (str) => {
  let str2 = str + str;
  let len = str.length;
  let res = new Array(len);
  for (let i = 1; i < len + 1; i++) {
    res[i - 1] = str2.slice(i, i + len);
  }

  return res;
};

module.exports = goAround;
