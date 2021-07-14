const balanceMe = (array) => {
  let sumL = 0, sumR = 0;

  for (let i = 0; i < array.length; i++) {
    sumR += array[i];
  }

  for (let j = 0; j < array.length; j++) {
    sumR -= array[j];

    if (sumL === sumR) return j;

    sumL += array[j];
  }

  return -1;
};


module.exports = balanceMe;