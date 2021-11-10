module.exports = (a) => {
  const r = [];
  const m = Math.min(...a);
  const p = a.indexOf(m);

  for (let i = 0; i < a.length; i++) {
    if (i != p) {
      r.push(a[i]);
    }
  }

  return r;
};