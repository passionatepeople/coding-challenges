const isInt = Number.isInteger;
module.exports = (a) => {
  let i = a.findIndex(isInt), r = a[i];
  do if (isInt(a[i]) && a[i] < r) r = a[i]; while (i++ < a.length);
  return r;
};