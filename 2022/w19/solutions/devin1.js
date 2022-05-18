module.exports = (n) => {
  const l = n.length - 5;
  let h = 0;
  for (let i = 0; i <= l; i++) {
    const j = ~~n.slice(i, i + 5);
    h = j > h ? j : h;
  }
  return h;
};