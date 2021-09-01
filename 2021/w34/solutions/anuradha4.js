function mostValuable(sentence) {
  const wordsArr = sentence.split(' '),
  weightedArr = wordsArr
    .map(word => word.split('')
    .reduce((sum, cur) => { 
      let currVal = parseInt(cur, 36)-9; return isNaN(currVal) ? 0 : sum + currVal; 
    }, 0));

  return wordsArr[weightedArr.indexOf(Math.max(...weightedArr))];
};

module.exports = mostValuable;