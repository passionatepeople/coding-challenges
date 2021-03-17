const asciiMap = {};
for (let i = 65; i<=90; i++) {
  asciiMap[i] = i + 32;
}

const rankLetters = (input) => {
  const countSet = {};
  const len = input.length;
  let i = 0;

  // collect count
  while(i < len) {
    let c = input.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      c = asciiMap[c];
    }

    countSet[c] = (countSet[c] || 0) + 1;
    i++;
  }

  // sort alphabetically and then by count
  const sortable = Object.keys(countSet).map( i => {
    const value = countSet[i];
    const char = String.fromCharCode(i);
    return [char, value];
  });

  sortable.sort((a, b) => b[1] - a[1]);
  
  return sortable.map(v => v[0]);
};

module.exports = rankLetters;
