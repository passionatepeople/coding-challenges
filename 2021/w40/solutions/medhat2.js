const helpJerry = (initialCards, finalCards) => {
  let sortedFinal = finalCards.split('');
  let replaced;
  for (let i = 0; i < initialCards.length; i++) {
    let curr = initialCards[i];
    let matchIndex = sortedFinal.indexOf(curr);
    if (matchIndex >= 0) {
      sortedFinal.splice(matchIndex, 1);
    } else {
      replaced = curr;
    }
  }
  return replaced ? [replaced, sortedFinal[0]] : [];
};

module.exports = helpJerry;
