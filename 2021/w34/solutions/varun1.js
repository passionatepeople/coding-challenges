const mostValuable = (sentence) => {
  const words = sentence.split(' ');
  let largestCount = 0
  let largestIndex = 0;

  let i = 0;
  let j = 0;

  for (; i < words.length; i++) {
    let wordValue = 0;
    const letters = words[i].split('');

    j = 0;
    for (; j < letters.length; j++) {
      const code = letters[j].charCodeAt(0);
      if (code > 64 && code < 91) {
        wordValue += code - 64;
      }
      if (code > 96 && code < 123) {
        wordValue += code - 96;
      }
    }

    if (largestCount < wordValue) {
      largestCount = wordValue;
      largestIndex = i;
    }
  }

  return words[largestIndex];
};

module.exports = mostValuable;
