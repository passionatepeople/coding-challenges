let indexOf = String.prototype.indexOf;
const helpJerry = (initialCards, finalCards) => {
  let length = initialCards.length,
    map = new Map(),
    foundChar,
    char,
    index;

  for (let i = 0; i < length; ++i) {
    char = initialCards[i];
    index = indexOf.call(finalCards, char, map.get(char));
    if (index < 0) {
      foundChar = char;
      break;
    }
    map.set(char, index + 1);
  }

  if (!foundChar) return [];

  map.clear();
  for (let i = 0; i < length; ++i) {
    char = finalCards[i];
    index = indexOf.call(initialCards, char, map.get(char));
    if (index < 0) {
      return [foundChar, char];
    }
    map.set(char, index + 1);
  }
};

module.exports = helpJerry;