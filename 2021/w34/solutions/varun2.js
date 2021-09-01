const mostValuable = (sentence) => {
  const length = sentence.length;
  let i = 0;
  let largestCount = 0
  let largestWord = '';

  let word = '';
  let count = 0;

  while (i <= length) {
    const code = i == length ? 0 : sentence.charCodeAt(i);
    if (code > 64 && code < 91) {
      count += code - 64;
      word += sentence.charAt(i)
    } else if (code > 96 && code < 123) {
      count += code - 96;
      word += sentence.charAt(i)
    } else {
      if (largestCount < count) {
        largestCount = count;
        largestWord = word;
      }
      word = '';
      count = 0;
    }

    i++;
  }

  return largestWord;
};

module.exports = mostValuable;
