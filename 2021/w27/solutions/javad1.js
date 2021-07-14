function sum(array) {
  let sum = 0,
    length = array.length;

  for (let i = 0; i < length; i++) {
    sum += array[i];
  }

  return sum;
}

const balanceMe = (array) => {
  let length = array.length,
    leftSum = 0,
    rightSum = sum(array);

  for (let i = 0; i < length; i++) {
    leftSum += i !== 0 ? array[i - 1] : 0;
    rightSum -= array[i];
    if (leftSum === rightSum) return i;
  }

  return -1;
};

module.exports = balanceMe;
