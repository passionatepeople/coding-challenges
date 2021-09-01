const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const defaultWord = { word: '', score: 0 }

const mostValuable = (sentence) => {
  const words = sentence.split(' ')
  
  const highest = words.reduce((prevWord, word) => {
    const score = word.toLowerCase().split('').reduce((score, char) => (
      score + (alphabet.indexOf(char)+1)
    ), 0);
    
    if(score > prevWord.score) {
      return { score, word};
    }
    
    return prevWord;
    
  }, defaultWord);
  
  return highest.word;
};
module.exports = mostValuable;
