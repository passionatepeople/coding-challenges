module.exports = (num) => {
  const n = num + '';
  let e = '';
  for (let i = 0; i < n.length; i++) {
    e += n[i] ** 2 + '';
  }
  return +e;
};