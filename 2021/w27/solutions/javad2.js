const balanceMe = (array) => {
  let length = array.length,
    leftSum = 0,
    rightSum = 0;

  for (let i = 1; i < length; i++) {
    rightSum += array[i];
  }

  if (rightSum === 0) return 0;

  for (let i = 1; i < length; i++) {
    leftSum += array[i - 1];
    rightSum -= array[i];
    if (leftSum === rightSum) return i;
  }

  return -1;
};

module.exports = balanceMe;
