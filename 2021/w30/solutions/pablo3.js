const isArray = Array.isArray;

const findMeDeep = (haystack, needle) => {
  for (const el of haystack) {
    if (isArray(el)) {
      for (const el2 of el) {
        if (isArray(el2)) {
          for (const el3 of el2) {
            if (isArray(el3)) {
              for (const el4 of el3) {
                if (el4 === needle) return true;
              }
            } else {
              if (el3 === needle) return true;
            }
          }
        } else {
          if (el2 === needle) return true;
        }
      }
    } else {
      if (el === needle) return true;
    }
  }

  return false;
};

module.exports = findMeDeep;
