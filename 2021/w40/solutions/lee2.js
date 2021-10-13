const helpJerry = (initialCards, finalCards) => {
  let finCards = finalCards.split("");
  let res = [];
  let currentIndex = 0;

  while (initialCards[currentIndex]) {
    let next = finCards.indexOf(initialCards[currentIndex]);
    if (next > -1) {
      finCards.splice(next, 1);
    } else {
      res.push(initialCards[currentIndex]);
    }
    currentIndex++;
  }
  return res.concat(finCards);
};

module.exports = helpJerry;
