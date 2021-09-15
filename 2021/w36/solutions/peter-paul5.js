const isInt = Number.isInteger;
module.exports = (a) => {
  let i = a.findIndex(isInt), r = a[i];
  for (; i < a.length; i++) if (isInt(a[i]) && a[i] < r) r = a[i];
  return r;
};