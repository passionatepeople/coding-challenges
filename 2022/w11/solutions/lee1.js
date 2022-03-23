const truncIt = (arr) => {
  if (arr.length < 2) return 0;
  let high = arr[0];

  let low = arr[0];

  let sum = 0 - high - low;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > high) {
      sum += high;
      high = arr[i];
      sum -= arr[i];
    }
    if (arr[i] < low) {
      sum += low;
      low = arr[i];
      sum -= arr[i];
    }
  }

  return sum;
};

module.exports = truncIt;
