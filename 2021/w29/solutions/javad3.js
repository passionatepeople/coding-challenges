const chopMeUp = (string, n = 2, s = "_") => {
  let length = string.length,
    result = [],
    i = 0,
    next,
    lastWord;

  while (true) {
    next = i + n;
    if (next >= length) {
      lastWord = string.substring(i);
      result.push(lastWord + s.repeat(n - lastWord.length));
      break;
    } else {
      result.push(string.substring(i, next));
    }
    i = next;
  }

  return result;
};

module.exports = chopMeUp;
