const alphabet = "abcdefghijklmnopqrstuvwxyz";

const hasItAll = (n) => {
  let m = n.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (m.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};

module.exports = hasItAll;
