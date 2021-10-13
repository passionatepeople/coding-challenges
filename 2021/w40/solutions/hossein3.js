let indexOf = String.prototype.indexOf;
const helpJerry = (initialCards, finalCards) => {
  let length = initialCards.length,
    map = new Map(),
    chars = [],
    foundChar,
    char,
    index;

  for (let i = 0; i < length; ++i) {
    char = initialCards[i];
    index = indexOf.call(finalCards, char, map.get(char));
    if (index < 0) {
      foundChar = char;
    } else {
      chars[index] = true;
      map.set(char, index + 1);
    }
  }

  if (!foundChar) return [];

  while (length--) {
    if (!chars[length]) {
      return [foundChar, finalCards[length]];
    }
  }
};

module.exports = helpJerry;
