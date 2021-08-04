const isArray = Array.isArray;

const findMeDeep = (haystack, needle) => {
  let l = haystack.length;
  while(l--) {
    const el = haystack[l];
    if (isArray(el)) {
      let l2 = el.length;
      while(l2--) {
        const el2 = el[l2];
        if (isArray(el2)) {
          let l3 = el2.length;
          while(l3--) {
            const el3 = el2[l3];
            if (isArray(el3)) {
              let l4 = el3.length;
              while(l4--) {
                const el4 = el3[l4];
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