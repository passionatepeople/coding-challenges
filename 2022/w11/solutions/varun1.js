let sum = 0;
let min = 0;
let max = 0;
let i = 0;
let len = 0
const truncIt = (arr) => {
  len = arr.length;
  
  if (len < 3) return 0;

  min = arr[0];
  max = arr[0];

  sum = arr[0];

  for (i = 1; i < len; i++) {
    let item = arr[i];
    sum += item;
    if (item < min) min = item;
    if (item > max) max = item;
  }

  return sum - min - max;
};

module.exports = truncIt;