const findMeDeep = (haystack, needle) => {
  let result = false;

  for (let i = 0; i < haystack.length; i++) {
    result = haystack[i] === needle;
    if (Array.isArray(haystack[i])) {
      result = findMeDeep(haystack[i], needle)
    }
    if (result) return result;
  }

  return result;
};

module.exports = findMeDeep;