const helpJerry = (initialCards, finalCards) => {
  let cards = (initialCards + finalCards).split("");
  let res = [];

  while (cards.length) {
    let next = cards.lastIndexOf(cards[0]);
    if (next > 0) {
      cards.splice(next, 1);
    } else {
      res.push(cards[0]);
    }
    cards.splice(0, 1);
  }

  return res;
};

module.exports = helpJerry;
