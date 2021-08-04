const findMeDeep = (haystack, needle) => {
  let hasNeedle = false;

  for (let item of haystack) {
    if (item === needle) {
      hasNeedle = true;
      break;
    } else if (Array.isArray(item) && findMeDeep(item, needle)) {
      hasNeedle = true;
      break;
    }
  }

  return hasNeedle;
};

module.exports = findMeDeep;
