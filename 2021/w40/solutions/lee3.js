const helpJerry = (initialCards, finalCards) => {
  let finCards = finalCards;
  let res;
  let currentIndex = 0;

  while (initialCards[currentIndex]) {
    let next = finCards.indexOf(initialCards[currentIndex]);
    if (next > -1) {
      finCards = finCards.substring(0, next) + finCards.substring(next + 1);
    } else {
      res = initialCards[currentIndex];
    }
    currentIndex++;
  }
  if (!res) return [];
  return [res, finCards[0]];
};

module.exports = helpJerry;
