const charCodeAt = String.prototype.charCodeAt;
const { findIndex } = Array.prototype;

const imSpecial = str => {
  let occurrences = [], charCodes = [];;

  for (let i = 0; i < str.length; i++) {
    const currCode = charCodeAt.call(str, i);
    const curr = currCode % 32;
    const currentCharOccurence = findIndex.call(charCodes, v => v === curr);
    if (currentCharOccurence >= 0) {
      occurrences[i] = 0;
      occurrences[currentCharOccurence] = 0;
    } else {
      charCodes[i] = curr;
      occurrences[i] = curr;
    }
  }
  return str[findIndex.call(occurrences, v => v !== 0)] || '';
};
module.exports = imSpecial;