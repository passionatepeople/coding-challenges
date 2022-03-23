const truncIt = (arr) => {
  let len = arr.length;
  if (len <= 2) return 0;

  let i = 0,
    smallest = arr[i],
    largest = arr[len - 1],
    count = 0;
  for (; i < len; i++) {
    count += arr[i];

    if (arr[i] < smallest) smallest = arr[i];
    if (arr[i] > largest) largest = arr[i];
  }

  return count - largest - smallest;
};

module.exports = truncIt;
