
const rankLetters = (input) => {
  const arr = input.toLowerCase().split('');
  const m = arr.reduce((map, char) => map.set(char, (map.get(char) || 0) + 1), new Map());
  const sort = new Map([...m.entries()].sort((a, b) => b[1] === a[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]));
  return [...sort.keys()];
};

module.exports = rankLetters;
