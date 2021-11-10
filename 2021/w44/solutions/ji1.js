const offWithIt = (arr) => {
  let [i, min] = [0, arr[0]];
  for (let j = 1; j < arr.length; j++) {
    if (min > arr[j]) {
      min = arr[j];
      i = j;
    }
  }
  return arr.filter((el, k) => i !== k);
};

module.exports = offWithIt;
