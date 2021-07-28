const chopMeUp = (string, n = 2, s = "_") => {
  let length = string.length,
    result = [],
    i = 0;

  do {
    if (i + n > length) {
      let lastWord = string.substr(i);
      result.push(lastWord + s.repeat(n - lastWord.length));
      break;
    } else {
      result.push(string.substr(i, n));
    }
    i += n;
  } while (i < length);

  return result;
};

module.exports = chopMeUp;
