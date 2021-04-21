const isException = (test) => test === "'";
const isLetter = (test) => test ? test.match(/^[a-z]+$/i) : false;
const isLowercase = (test) => test ? test.match(/^[a-z]+$/) : false;
const isUpperCase = (test) => test ? test.match(/^[A-Z]*$/) : false;

const fixCase = (input) => {
  const chars = input.split('');
  let prevChar;
  let result = '';

  chars.forEach((char, i) => {!prevChar
    if (isException(char)) {
      result += char;
      return;
    }

    if (isLetter(char) && i === 0) {
      result += char.toLowerCase();
    } else if (isLowercase(char) && isLetter(prevChar)) {
      result += char;
    } else if (isLetter(char) && !isLetter(prevChar)) {
      result += char.toUpperCase();
    } else if (isUpperCase(char) && isUpperCase(prevChar)) {
      result += char.toLowerCase();
    } else if (isUpperCase(char)) {
      result += char;
    }
    prevChar = char;
  });

  return result;
};

module.exports = fixCase;
