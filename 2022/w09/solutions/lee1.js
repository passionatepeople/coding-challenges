const goAround = (str) => {
  let str2 = str + str;
  let len = str.length;
  let res = [];
  for (let i = 1; i < len + 1; i++) {
    res.push(str2.slice(i, i + len));
  }

  return res;
};

module.exports = goAround;
