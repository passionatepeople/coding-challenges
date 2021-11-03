const hasItAll = (n) => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let str = n.toLowerCase();

  for (let i = 0; i < 26; i++) {
    if (str.indexOf(alpha[i]) < 0) return false;
  }

  return true;
};

module.exports = hasItAll;
