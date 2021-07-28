const chopMeUp = (string, n = 2, s = '_') => {
  const len = Math.ceil(string.length / n);
  const arr = Array(len);
  const last = arr.length - 1;
  let offset = 0;

  for (let i = 0; i < len; i++) {
    arr[i] = string.slice(offset, offset + n);
    offset += n;
  }

  while (arr[last].length < n) {
    arr[last] += s;
  }

  return arr;
};

module.exports = chopMeUp;
