const getScore = (str) => {
  let score = 0;
  const lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    score += lower.charCodeAt(i) - 96;
  }
  return score;
}

const mostValuable = (sentence) => {
  const words = sentence.split(' ');
  let biggest = 0;
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const score = getScore(word);

    if (score > biggest) {
      biggest = score;
      result = word;
    }
  }

  return result;
};

module.exports = mostValuable;