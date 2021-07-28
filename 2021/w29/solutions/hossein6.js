module.exports = function (string, n, s) {
  n = void 0 === n ? 2 : n;
  s = void 0 === s ? "_" : s;

  var chops = [];
  var chopIndex = -1;
  var i = 0;
  var length = string.length;
  for (; i < length; ++i) {
    if (i % n === 0) {
      chops[++chopIndex] = string[i];
    } else {
      chops[chopIndex] += string[i];
    }
  }

  length = (chopIndex + 1) * n;
  for (; i < length; ++i) {
    chops[chopIndex] += s;
  }

  return chops;
};
