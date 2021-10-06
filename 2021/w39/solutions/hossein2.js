const removeDupes = (string) => {
  let chars = [],
    length = string.length,
    up = string.toUpperCase(),
    low = string.toLowerCase(),
    i = 0;

  for (; i < length; ++i) {
    let char = string[i],
      code = char.charCodeAt();
    chars.push(char);
    if (64 < code && code < 91) {
      while (up[i + 1] === char) ++i;
    } else if (96 < code && code < 123) {
      while (low[i + 1] === char) ++i;
    } else {
      while (low[i + 1] === char) {
        ++i;
        chars.push(char);
      }
    }
  }
  return chars.join("");
};

module.exports = removeDupes;