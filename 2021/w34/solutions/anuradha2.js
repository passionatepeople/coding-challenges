const alphabets = " abcdefghijklmnopqrstuvwxyz".split('');
function mostValuable(sentence) {
  const arr = sentence.split(' ');
  let highestSum = 0;
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const currSum = arr[i].toLowerCase().split('').reduce((sum, curr) => sum + (alphabets.indexOf(curr) || 0), 0)
    if (currSum > highestSum) { result = arr[i]; highestSum = currSum; }
  }
  
  return result;
};

module.exports = mostValuable;