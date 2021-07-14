const balanceMe = arr => {
  if (arr.length == 1) {
    return 0;
  }
  let left_sum = 0, right_sum = 0;
  for (let i=0; i < arr.length; i++) {
    right_sum += arr[i];
  }

  for (let i=0; i < arr.length; i++) {
    right_sum -= arr[i];
    if(left_sum == right_sum) {
      return i;
    }
    left_sum += arr[i];
  }

  return -1;
}

module.exports = balanceMe;