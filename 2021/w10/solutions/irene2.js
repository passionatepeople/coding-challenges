const rankLetters = (input) => {
  const arr = input.toLowerCase().split('');
  const m = arr.reduce((map, char) => map.set(char, (map.get(char) || 0) + 1), new Map());
  return [...m.entries()].sort((a, b) => b[1] === a[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]).map(x => x[0]);
};
module.exports = rankLetters;