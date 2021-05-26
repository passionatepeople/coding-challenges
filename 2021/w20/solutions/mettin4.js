module.exports = (array1, array2, direction) => {
  const arr1 = array1.slice();
  const arr2 = array2.slice();
  const l1 = arr1.length;
  const l2 = arr2.length;
  const orderedArray1 = arr1[0] > arr1[l1 - 1] ? arr1 : arr1.reverse();
  const orderedArray2 = arr2[0] > arr2[l2 - 1] ? arr2 : arr2.reverse();
  const limit = l1 + l2;
  const response = [];

  let i = limit;
  let i1 = 0;
  let i2 = 0;

  while (i--) {
    if (orderedArray2[i2] === undefined || orderedArray1[i1] > orderedArray2[i2]) {
      response.push(orderedArray1[i1++]);
      continue;
    }
    response.push(orderedArray2[i2++]);
  }

  if (direction === 'asc') {
    return response.reverse();
  }
  return response;
};
