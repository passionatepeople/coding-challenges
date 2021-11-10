const offWithIt = (arr) => {
  let smallestVal = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestVal) {
      smallestVal = arr[i];
      smallestIndex = i;
    }
  }

  let res = arr.slice(0);
  res.splice(smallestIndex, 1);
  return res;
};

module.exports = offWithIt;
