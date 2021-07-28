const whyNotRegex = (t, i = 2, n = "_") => {
  let d = new RegExp(`.{1,${i}}`, "g");
  let e = t.match(d);
  let r = e.length - 1;
  if (e[r].length !== i) {
    e[r] = e[r].padEnd(i, n);
  }

  return e;
};

module.exports = whyNotRegex;
