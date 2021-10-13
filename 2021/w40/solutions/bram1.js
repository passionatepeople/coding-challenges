const removeAt = (str, index) => str.slice(0, index) + str.slice(index + 1);

const helpJerry = (initialCards, finalCards) => {
    initialCards = [...initialCards].filter(c => {
        let index = finalCards.indexOf(c);

        if (index >= 0) {
            finalCards = removeAt(finalCards, index);
            return false;
        }

        return true;
    })

  return [...initialCards, ...finalCards];
};

module.exports = helpJerry;
