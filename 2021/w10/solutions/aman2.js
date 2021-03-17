const asciiMap = {};
for (let i = 65; i<=90; i++) {
  asciiMap[i] = i + 32;
}

const sortIt = arr => arr.sort((a, b) => b[1] - a[1]).map(n => n[0]);
const concat = (arr2, arr1) => Array.prototype.push.apply(arr2, arr1);

const rankLetters = (input) => {
  const countSet = {};
  const len = input.length;
  let i = 0;

  while(i < len) {
    let c = input.charCodeAt(i);
    if (c >= 65 && c <= 90)
      c = asciiMap[c];

    countSet[c] = (countSet[c] || 0) + 1;
    i++;
  }

  let arr1 = [], arr2 = [], sortable = [];
  
  Object.keys(countSet).forEach( i => {
    const value = countSet[i];
    const char = String.fromCharCode(i);

    if (value > 2) {
      sortable.push([char, value]);
    } else if (value == 2) {
      arr2.push([char, value])
    } else {
      arr1.push(char);
    }
  });

  sortable = sortIt(sortable);
  arr2 = sortIt(arr2);

  concat(arr2, arr1);
  concat(sortable, arr2);

  return sortable;
};

module.exports = rankLetters;
