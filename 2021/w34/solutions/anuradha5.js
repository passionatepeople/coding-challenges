function mostValuable(sentence) {
  const wordsArr = sentence.split(' '),
    mostValuableIdx = wordsArr
    .map(word => word.split('')
    .reduce((sum, cur) => { 
      let currVal = parseInt(cur, 36)-9; return isNaN(currVal) ? 0 : sum + currVal; 
    }, 0))
    .reduce((val, cur, idx, arr) => cur > arr[val] ? idx : val, 0);
  return wordsArr[mostValuableIdx];
};

module.exports = mostValuable;