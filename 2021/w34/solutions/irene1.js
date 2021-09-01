const mostValuable = (sentence) => {
  const words = sentence.split(' ');
  let biggest = 0;
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const score = Array.from(word).reduce((score, letter) => score + letter.toLowerCase().charCodeAt(0) - 96, 0);

    if (score > biggest) {
      biggest = score;
      result = word;
    }
  }
  
  return result;
};

module.exports = mostValuable;
