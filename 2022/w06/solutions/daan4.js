let c = String.prototype.charCodeAt, f = String.fromCharCode;
module.exports = (a) => {
  let i = a.length -1;
  while (i >= 0) {
    let t = c.call(a[i], 0) - 1;
    if (t !== c.call(a[i - 1], 0)) {
      return f(t);
    }
    i--;
  }
};