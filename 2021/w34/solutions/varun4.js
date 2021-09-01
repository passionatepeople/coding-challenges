const mostValuable = (s) => {
  let length = s.length;
  let i = 0;
  let largestCount = 0
  let largestWord = '';

  let word = '';
  let count = 0;

  for (; i <= length; i++) {
    let code = i == length ? 0 : s.charCodeAt(i);
    let OCode = code;

    if (code > 91) code -= 32;
    if (code > 64 && code < 91) {
      count += code - 64;
      word += String.fromCharCode(OCode)
      continue
    }

    if (largestCount < count) {
      largestCount = count;
      largestWord = word;
    }
    word = '';
    count = 0;
  }

  return largestWord;
};

module.exports = mostValuable;
