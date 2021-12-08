const charCode = String.prototype.charCodeAt
const pingMeMaybe = (ip) => {
  const len = ip.length;
  let i = 0;
  let word = 0;
  for (; i < len; i++) {
    const char = charCode.call(ip, i) - 48;
    if (char === -2) {
      if (word > 255) {
        return false;
      }
      word = 0;
    } else if (i === len - 1) {
      word = word * 10 + char;
      return !(word > 255);
    } else {
      if (!word && char === -2 && charCode.call(ip, i+1) !== 46) {
        return false;
      } else {
        word = word * 10 + char;
      }
    }
  }
  return true;
};

module.exports = pingMeMaybe;
