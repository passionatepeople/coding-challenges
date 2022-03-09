const { slice } = String.prototype;

const goAround = (str) => {
  let str2 = str + str;
  let len = str.length;
  let res = new Array(len);
  for (let i = 1; i < len + 1; i++) {
    res[i - 1] = slice.call(str2, i, i + len);
  }

  return res;
};

module.exports = goAround;
