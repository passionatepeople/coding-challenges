const mergeArrays = (arr1, arr2, direction) => {
  const asc = direction === "asc";
  const flip1 = asc !== arr1[0] < arr1[arr1.length - 1];
  const flip2 = asc !== arr2[0] < arr2[arr2.length - 1];
  const result = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    const next1 = flip1 ? arr1[arr1.length - i1 - 1] : arr1[i1];
    const next2 = flip2 ? arr2[arr2.length - i2 - 1] : arr2[i2];
    if ((asc && next1 < next2) || (!asc && next1 > next2)) {
      result.push(next1);
      i1 += 1;
    } else {
      result.push(next2);
      i2 += 1;
    }
  }
  while (i1 < arr1.length) {
    result.push(flip1 ? arr1[arr1.length - i1 - 1] : arr1[i1]);
    i1 += 1;
  }
  while (i2 < arr2.length) {
    result.push(flip2 ? arr2[arr2.length - i2 - 1] : arr2[i2]);
    i2 += 1;
  }
  return result;
};

module.exports = mergeArrays;