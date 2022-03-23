const truncIt = (arr) => {
  var a = [...arr],
      t = 0,
      i = -1,
      f = a.indexOf(Math.min(...a)),
      l = a.indexOf(Math.max(...a));
  delete a[f];
  delete a[l];
  while (a.length > 2 && ++i < a.length) {
    if (a[i]) t += a[i];
  }
  return t;
};
module.exports = truncIt;
