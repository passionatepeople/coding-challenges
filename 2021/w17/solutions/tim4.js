const findOccurences = (code) => {
  let occurences = 0;
  for (i = code.length; i--; ) {
    if (code.charCodeAt(i) === 40 || code.charCodeAt(i) === 41) occurences++;
  }
  return occurences;
};

const isEven = (number) => number % 2 === 0;

const isValid = (code) => {
  const occurences = findOccurences(code);
  const even = isEven(occurences);

  return even;
};

module.exports = isValid;
