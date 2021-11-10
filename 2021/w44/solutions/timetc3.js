const offWithIt = (a) => {
  const m = Math.min(...a);
  const p = a.indexOf(m);
  const c = a.slice();
  c.splice(p, 1);
  return c;
};

module.exports = offWithIt;