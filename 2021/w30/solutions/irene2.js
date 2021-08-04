const findMeDeep = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {  
    const val = haystack[i];
    if (val === needle) return true;

    if (Array.isArray(val)) {
      if (findMeDeep(val, needle)) return true;
    }
  }
  return false;
};

module.exports = findMeDeep;