const hasItAll = (n) => {
  if (n.length < 26) return false;

  let index = 0;
  while (index < 26) {
    if (n.indexOf(String.fromCharCode(index + 65)) === -1 && n.indexOf(String.fromCharCode(index + 97)) === -1) {
      return false
    }
    index++;
  }

  return true;
};

module.exports = hasItAll;
