const findMeDeep = (haystack, needle) => {
  for (item of haystack) {
    if (typeof item !== "object") {
      if (needle === item) return true;
    } else {
      if (findMeDeep(item, needle)) return true;
    }
  }
  return false;
};

module.exports = findMeDeep;
