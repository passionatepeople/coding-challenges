const imSpecial = (arr) => {
  const [a0, a1, ...rest] = [...arr].sort();
  return a0 == a1 ? rest.pop() : a0;
};

module.exports = imSpecial;
