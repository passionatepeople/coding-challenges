const { slice, repeat } = String.prototype;
const goAround = (str) => {
  const len = str.length;
  const repeated = repeat.call(str, 2);
  let arr = Array(len);
  let i = 1;
  for (; i < len + 1; i++) {
    arr[i - 1] = slice.call(repeated, i, i + len);
  }
  return arr;
};

module.exports = goAround;
