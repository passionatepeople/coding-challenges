const slice = String.prototype.slice;

const goAround = (str) => {
  const len = str.length;
  if (len < 2) return [str];
  const repeated = str + str;
  let arr = Array(len);
  let i = 1;
  for (; i <= len; i++) {
    arr[i - 1] = slice.call(repeated, i, i + len);
  }
  return arr;
};

module.exports = goAround;
