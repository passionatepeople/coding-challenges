const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const hasItAll = (n) => {
  const lower = n.toLowerCase();
  for (let i = 0; i < 26; i++) {
    if (lower.indexOf(chars[i]) === -1) return false;
  }
  return true;
};

module.exports = hasItAll;