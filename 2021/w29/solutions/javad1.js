const chopMeUp = (string, n = 2, s = "_") => {
  let length = string.length,
    result = [],
    word = "";

  for (let i = 0; i < length; i++) {
    if (i % n === 0) {
      if (word) result.push(word);
      word = "";
    }
    word += string[i];
  }

  if (word) {
    result.push(word + s.repeat(n - word.length));
  }

  return result;
};

module.exports = chopMeUp;
