// Do not try this at home :)
const findMeDeep = (haystack, needle) => {
  let len = haystack.length;
  for (let i = 0; i < len; i++) {
    let item = haystack[i];
    if (typeof item === "number" || typeof item === "string") {
      if (needle === item) return true;
    } else {
      let haystack = item;
      let len = haystack.length;
      for (let i = 0; i < len; i++) {
        let item = haystack[i];
        if (typeof item === "number" || typeof item === "string") {
          if (needle === item) return true;
        } else {
          let haystack = item;
          let len = haystack.length;
          for (let i = 0; i < len; i++) {
            let item = haystack[i];
            if (typeof item === "number" || typeof item === "string") {
              if (needle === item) return true;
            } else {
              let haystack = item;
              let len = haystack.length;
              for (let i = 0; i < len; i++) {
                let item = haystack[i];
                if (typeof item === "number" || typeof item === "string") {
                  if (needle === item) return true;
                } else {
                  if (findMeDeep(item, needle)) return true;
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
};

module.exports = findMeDeep;
