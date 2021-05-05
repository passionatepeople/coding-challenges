const OPEN = 39
const CLOSE = 42;

const findOccurences = (code) => {
  let occurences = 0;
  for (i = code.length; i--; ) {
    let c = code.charCodeAt(i);
    if (c > OPEN && c < CLOSE) occurences++;
  }
  return occurences;
}

const isEven = number => !(number & 1);

const isValid = (code) => {
  const occurences = findOccurences(code);
  const even = isEven(occurences);

  return even;
};

module.exports = isValid;
