const hasItAll = (n) => {
  if (n.length < 26) return false;

  return Array(26).fill(0).every((_, index) => n.indexOf(String.fromCharCode(index + 65)) !== -1 || n.indexOf(String.fromCharCode(index + 97)) !== -1);
};

module.exports = hasItAll;
