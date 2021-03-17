const rankLetters = (input = '') => {
  if (typeof input !== 'string') return;
  
  const alphabeticSort = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);
  const relativeSort = (a, b) => {
    if (a.count === b.count) {
      return alphabeticSort(a.letter, b.letter);
    }
    return b.count - a.count;
  };

  const countObject = [...input.toLowerCase()]
    .sort(alphabeticSort)
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator;
    }, {});
  return Object.keys(countObject)
    .reduce((accumulator, letter) => {
      accumulator.push({letter, count: countObject[letter]});
      return accumulator;
    }, [])
    .sort(relativeSort)
    .map(({letter}) => letter);
};

module.exports = rankLetters;
