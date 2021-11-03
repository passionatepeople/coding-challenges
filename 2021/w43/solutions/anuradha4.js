const { fromCharCode } = String;
const { includes, toLowerCase } = String.prototype;
const hasItAll = n => {
  const lower = toLowerCase.call(n);
  for (let i = 97; i <= 122; i++) {
    if (!includes.call(lower, fromCharCode(i))) {
      return false;
    }
  }
  return true;
}

module.exports = hasItAll;