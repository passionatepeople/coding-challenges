const mostValuable = (sentence) => {
  const words = sentence.split(' ');
  const scores = words.map(word => Array.from(word).reduce((score, letter) => score + letter.toLowerCase().charCodeAt(0) - 96, 0));
  return words[scores.indexOf(Math.max.apply(null, scores))];
};

module.exports = mostValuable;
