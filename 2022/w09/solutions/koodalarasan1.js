const goAround = (str) => {
  const arr = [];
  const push = Array.prototype.push.bind(arr);
  const slice = String.prototype.slice.bind(str);
  const len = str.length;
  let i = 1;

  for (; i <= len; i++) {
    push(slice(i) + slice(0, i));
  }

  return arr;
};

module.exports = goAround;