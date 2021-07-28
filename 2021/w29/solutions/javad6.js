const chopMeUp = (string, n = 2, s = "_") => {
  let length = string.length,
    result = [],
    i = 0,
    next;

  while (true) {
    next = i + n;
    if (next >= length) {
      let word = string.substring(i);
      length = n - word.length;
      for (let j = 0; j < length; j++) {
        word += s;
      }
      result.push(word);
      break;
    } else {
      result.push(string.substring(i, next));
    }
    i = next;
  }

  return result;
};

module.exports = chopMeUp;
