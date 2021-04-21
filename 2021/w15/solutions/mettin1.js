const removeHyphens = input => input.replace(/[-_]+/g, 0)
const splitByCase = input => input.split(/([A-Z][a-z]+)|0/g).filter(i => !!i);
const lowerCaseAllItems = input => input.map(i => i.toLowerCase());

const fixCase = (input) => {
  const inputWithoutDashes = removeHyphens(input);
  const partsSplitByCase = splitByCase(inputWithoutDashes);
  const [firstString, ...otherStrings] = lowerCaseAllItems(partsSplitByCase);
  return `${firstString.toLowerCase()}${otherStrings.map(([firstLetter, ...letters]) => `${firstLetter.toUpperCase()}${letters.join('').toLowerCase()}`).join('')}`
};

module.exports = fixCase;
