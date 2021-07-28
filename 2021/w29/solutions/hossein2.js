module.exports = function (a, b, c) {
  b = void 0 === b ? 2 : b;
  c = void 0 === c ? "_" : c;
  for (var d = [], e = 0, m = a.length; e < m; e += b) d.push(a.substr(e, b));
  a = d.length - 1;
  d[a] = d[a].padEnd(b, c);
  return d;
};
