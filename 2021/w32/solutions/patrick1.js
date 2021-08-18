const imSpecial = (arr) => {
  return arr.reduce((a, b) => a ^ b);
};

module.exports = imSpecial;
