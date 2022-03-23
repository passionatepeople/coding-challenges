const truncIt = (arr) => {
  let a = [...arr], t = 0, f = a.indexOf(Math.min(...a)), l = a.indexOf(Math.max(...a));
  delete a[f];
  delete a[l];
  for (let i in a) {
    t += a[i];
  }
  return t;
};

module.exports = truncIt;
