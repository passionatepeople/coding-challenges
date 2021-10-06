const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const removeDupes = (string) => {
  let previousChar = '';
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const check = char.toLowerCase();

    if (check !== previousChar || !alphabet.includes(check)) {
      previousChar = check
      result = result + char;
    }
  }

  return result
};

module.exports = removeDupes;
