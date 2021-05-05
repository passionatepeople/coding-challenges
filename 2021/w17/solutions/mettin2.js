module.exports = (code) => {
  const openingBracketCount = code.match(/\(/g).length;
  const closingBracketCount = code.match(/\)/g).length;

  return openingBracketCount === closingBracketCount;
};
