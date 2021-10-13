const { set, get } = Map.prototype;

const helpJerry = (initialCards, finalCards, valueMap = new Map()) => {
  let left = '', right = '';
  for (let i = 0; i < initialCards.length; i++) {
    const initial = initialCards[i], final= finalCards[i];
    if (initial !== final) {
      set.call(valueMap, initial, (get.call(valueMap, initial) || 0) + 1);
      set.call(valueMap, final, (get.call(valueMap, final) || 0) - 1);
    }
  }

  for (let [key, value] of valueMap) {
    if (value > 0) {
      left += key;
    } else if ( value < 0) {
      right += key;
    }  
  }

  return left ? [left, right] : [];
};

module.exports = helpJerry;