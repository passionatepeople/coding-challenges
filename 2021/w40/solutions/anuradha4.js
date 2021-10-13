const { replace, indexOf } = String.prototype;
module.exports = (a, b, c=a, d=b) => {
  for (let i = 0; i < c.length; i++) {
    const x=c[i];
    if (indexOf.call(d,x) >= 0) {
      d=replace.call(d, x, '');
      c=replace.call(c, x, '');
      i--;
    }
  }

  return c ? [c, d] : [];
}