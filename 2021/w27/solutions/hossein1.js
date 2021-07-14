function balanceMe(array) {
  let leftSum = 0;
  let rightSum = 0;

  for (let leftIndex = 0, il = array.length; leftIndex < il; ++leftIndex) {
    for (let rightIndex = array.length - 1; rightIndex >= leftIndex; rightIndex--) {
      // console.log({ leftIndex, rightIndex, leftSum, rightSum });
      if (leftSum === rightSum && leftIndex === rightIndex) {
        return leftIndex;
      }
      rightSum += array[rightIndex];
    }
    rightSum = 0;
    leftSum += array[leftIndex];
  }

  return -1;
}

module.exports = balanceMe;
