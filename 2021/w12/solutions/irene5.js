const manipulateNumber = num => {
  let r = 0;
  for (let n = num; n > 0; n = n / 10 >> 0) {
    r = r * 10 + n % 10;
  }

  let sum = 0;
  let s = num > r ? num - r : r - num;
  for(; s > 0; s = s / 10 >> 0) {
    sum += s % 10;
  }
  return num > r ? sum : -sum;
};

module.exports = manipulateNumber;