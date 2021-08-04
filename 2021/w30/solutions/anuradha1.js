const findMeDeep = (haystack, needle) => haystack.flat(Infinity).indexOf(needle) >= 0;

module.exports = findMeDeep;