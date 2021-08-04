const isArray = Array.isArray;

function findMe(haystack, needle, res = false) {
  for (let i = 0; i < haystack.length; ++i) {
    if (res) return true;
    if (haystack[i] === needle) {
      return true;
    }
    if (isArray(haystack[i])) {
      res = findMe(haystack[i], needle, res);
    }
  }
  return res;
}
module.exports = findMe;
