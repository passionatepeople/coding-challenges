const balanceMe = (array) => {
  let res = -1, sumL = 0, sumR = 0;

  for (let i = 0; i < array.length; i++) {
    sumL += array[i];
  }

  for (let j = array.length - 1; j > -1; j--) {
    sumL -= array[j];

    if (sumL === sumR) res = j;

    sumR += array[j];
  }

  return res;
};

module.exports = balanceMe;