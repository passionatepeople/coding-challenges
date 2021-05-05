module.exports = (code) => {
  const openingBracketCount = code.split(/\(/g).length;
  const closingBracketCount = code.split(/\)/g).length;

  return openingBracketCount === closingBracketCount;
};