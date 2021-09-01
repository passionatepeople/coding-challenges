const mostValuable = (sentence) => {
  const length = sentence.length;
  let val = 0,
    word = "",
    candidateVal = 0,
    candidateWord = "",
    i = 0;
  for (; i < length + 1; i++) {
    const char = sentence[i];
    if (char === " " || char === undefined) {
      if (candidateVal > val) {
        word = candidateWord;
        val = candidateVal;
      }
      candidateWord = "";
      candidateVal = 0;
      continue;
    }
    candidateWord += char;
    const n = char.charCodeAt(0);
    if (n > 64 && n < 91) {
      candidateVal += n - 64;
    } else if (n > 96 && n < 123) {
      candidateVal += n - 96;
    }
  }
  return word;
};

module.exports = mostValuable;
