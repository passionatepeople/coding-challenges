const isArray = Array.isArray;

const findMeDeep = (haystack, needle) => {
  let result = false;

  for (const el of haystack) {
    result = isArray(el) ? findMeDeep(el, needle) : el === needle;
    if (result) break;
  }

  return result;
};

module.exports = findMeDeep;
