const findMeDeep = (haystack, needle) => {
  let len = haystack.length;
  for (let i = 0; i < len; i++) {
    let item = haystack[i];
    if (typeof item !== "object") {
      if (needle === item) return true;
    } else {
      if (findMeDeep(item, needle)) return true;
    }
  }
  return false;
};

module.exports = findMeDeep;
