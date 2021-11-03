const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let hasItAll = (input) => {
  const str = input.toLowerCase();

  for (const char of alphabet) {
    if (str.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
};

module.exports = hasItAll;
