const findMeDeep = (haystack, needle) => {
  return haystack.flat(Infinity).indexOf(needle) >= 0;
};

module.exports = findMeDeep;
