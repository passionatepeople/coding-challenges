const balanceMe = (array) => {
  let balancePoint = -1;
  let left = 0;
  let right = array.reduce((a, b) => a + b, 0);

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (left === right - el) {
      balancePoint = i;
      break;
    }

    left += el;
    right -= el;
  }

  return balancePoint;
};

module.exports = balanceMe;
