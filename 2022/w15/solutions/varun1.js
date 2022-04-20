const simplify = (arr) => {
  let ranges = '';
  let startOfRange = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (!((i + 1 < arr.length && arr[i + 1] !== arr[i] + 1) || (i === arr.length - 1))) {
      continue;
    }
    if (ranges) ranges += ','
    switch (arr[i] - startOfRange) {
      case 0:
        ranges += startOfRange;
        break;
      case 1:
        ranges += startOfRange + "," + arr[i];
        break;
      default:
        ranges += startOfRange + "-" + arr[i];
    }
    startOfRange = arr[i + 1];
  }

  return ranges;
};

module.exports = simplify;