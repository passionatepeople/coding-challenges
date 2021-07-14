const balanceMe = (array) => {
  let left = 0, right = 0;

  for (let i = 0, l = array.length; i < l; i++) {
    right += array[i];
  }

  for (let i = 0, l = array.length; i < l; i++) {
    right -= array[i];

    if (left === right) {
      return i;
    }

    left += array[i];
  }

  return -1;
};

module.exports = balanceMe;
