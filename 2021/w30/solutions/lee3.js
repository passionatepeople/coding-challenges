function findMe(haystack, needle, res = false) {
  if (res) return true;
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
    if (Array.isArray(haystack[i])) {
      res = findMe(haystack[i], needle, res);
    }
  }
  return res;
}

module.exports = findMe;
