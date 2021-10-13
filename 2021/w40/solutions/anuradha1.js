const helpJerry = (initialCards, finalCards) => {
  const a = new Map();
  const result = [];
  for (let i = 0; i < initialCards.length; i++) {
    let curr = (a.get(initialCards[i]) || 0) + 1;
    a.set(initialCards[i], curr);
  }

  for (let i = 0; i < finalCards.length; i++) {
    let curr = (a.get(finalCards[i]) || 0) - 1;
    a.set(finalCards[i], curr);
  }

  a.forEach((val, key) => {
    if (val > 0) {
      result[0] = (result[0] || '') + key
    } else if ( val < 0) {
      result[1] = (result[1] || '') + key
    }   
  });

  return result;
};

module.exports = helpJerry;