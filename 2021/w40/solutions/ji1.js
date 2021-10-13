const helpJerry = (initialCards, finalCards) => {
  const arr1 = Array.from(initialCards).sort();
  const arr2 = Array.from(finalCards).sort();
  const a = [];

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      if (
        (finalCards.match(new RegExp(arr1[i], "g")) || []).length !==
        (initialCards.match(new RegExp(arr1[i], "g")) || []).length
      ) {
        a[0] = arr1[i];
        break;
      } else if (
        (initialCards.match(new RegExp(arr2[i], "g")) || []).length !==
        (finalCards.match(new RegExp(arr2[i], "g")) || []).length
      ) {
        a[1] = arr2[i];
        break;
      }
    }
  }
  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr2[i] !== arr1[i]) {
      if (
        (finalCards.match(new RegExp(arr2[i], "g")) || []).length !==
        (initialCards.match(new RegExp(arr2[i], "g")) || []).length
      ) {
        a[1] = arr2[i];
        break;
      } else {
        a[0] = arr1[i];
        break;
      }
    }
  }
  return a;
};

module.exports = helpJerry;
