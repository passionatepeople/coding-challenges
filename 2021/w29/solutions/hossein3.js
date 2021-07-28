module.exports = function (string, n, s) {
  n = void 0 === n ? 2 : n;
  s = void 0 === s ? "_" : s;

  let chops = [];
  let chopIndex = -1;
  let i = 0;
  for (let il = string.length; i < il; ++i) {
    if (i % n === 0) {
      chops[++chopIndex] = "";
    }
    chops[chopIndex] += string[i];
  }

  for (let il = (chopIndex + 1) * n; i < il; ++i) {
    chops[chopIndex] += s;
  }

  return chops;
};
