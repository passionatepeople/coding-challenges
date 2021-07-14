const balanceMe = (array, index = array.length) => {
  const totalSum = array.reduce((acc, cur) => acc + cur);
  let leftSum = 0;

  for (let i = 0; i < index; i++) {
    if (leftSum === totalSum - leftSum - array[i]) {
      return i;
    }
    leftSum += array[i];
  }
  return -1;
};

module.exports = balanceMe;
