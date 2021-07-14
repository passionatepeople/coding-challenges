const balanceMe = arr => {
  const length = arr.length;
  if (length == 1) {
    return 0;
  }
  let left_sum = 0, right_sum = 0;
  for (let i = 1; i < length; i++) {
    right_sum += arr[i];
  }

  for (let i = 0; i < length - 1; i++) {
    if (left_sum == right_sum) {
      return i;
    }
    left_sum += arr[i];
    right_sum -= arr[i + 1];
  }
  // if last index makes balanced array
  if (left_sum == 0) return length - 1;

  return -1;
};

module.exports = balanceMe;