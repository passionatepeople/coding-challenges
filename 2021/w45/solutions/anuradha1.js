const { toUpperCase, toLowerCase } = String.prototype;

const maskIt = (string, number, len = string.length, result='') => {
  let binary = number.toString(2);
  binary = binary.padEnd(len, binary);

  for (let i = 0, j = 0; i < len; i++) {
    let char = string[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      if (binary[j] === '1') {
        result += char === toUpperCase.call(char) ? toLowerCase.call(char) : toUpperCase.call(char);
      } else {
        result += char;
      }
      j++;
    } else {
      result += char;
    }
  }

  return result;
};

module.exports = maskIt;