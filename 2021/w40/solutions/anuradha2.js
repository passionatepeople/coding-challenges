const helpJerry = (initialCards, finalCards) => {
  const valueMap = new Map();
  let left = '', right = '';
  for (let i = 0; i < initialCards.length; i++) {
    if (initialCards[i] !== finalCards[i]) {
      let first = (valueMap.get(initialCards[i]) || 0) + 1;
      let second = (valueMap.get(finalCards[i]) || 0) - 1;
      valueMap.set(initialCards[i], first);
      valueMap.set(finalCards[i], second);
    }
  }

  valueMap.forEach((val, key) => {
    if (val > 0) {
      left += key;
    } else if ( val < 0) {
      right += key;
    }   
  });

  return left ? [left, right] : [];
};

module.exports = helpJerry;