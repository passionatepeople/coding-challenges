const mergeArrays = (arr1, arr2, direction) => {
  // Find the extreme value first
  const dir = direction === 'asc'
  let [i1, d1, m1] = (arr1[0] < arr1[arr1.length-1] ? dir : !dir) ? [0, 1, arr1.length] : [arr1.length-1, -1, -1]
  let [i2, d2, m2] = (arr2[0] < arr2[arr2.length-1] ? dir : !dir) ? [0, 1, arr2.length] : [arr2.length-1, -1, -1]
  const res = new Array(arr1.length + arr2.length)

  for (let i=0; i<res.length; i++) {
    // pick 1 if: arr1 has a smaller current value for the right direction, and can still be picked from or arr2 is fullfilled.
    const choice = (arr1[i1] < arr2[i2] ? dir : !dir) && i1 !== m1 || i2 === m2
    res[i] = choice ? arr1[i1] : arr2[i2]
    choice ? i1 += d1 : i2 += d2
  }

  return res;
};

module.exports = mergeArrays;
