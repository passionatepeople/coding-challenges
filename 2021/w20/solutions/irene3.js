
const getAscArray = arr => arr[0] < arr[arr.length - 1] ? arr : [...arr].reverse();

const mergeArrays = (arr1, arr2, direction) => {  
  let arr1Asc = getAscArray(arr1);
  let arr2Asc = getAscArray(arr2);

  let pos1 = 0;
  let pos2 = 0;
  const result = [];
  while (pos1 + pos2 < arr1.length + arr2.length) {
    let one = arr1Asc[pos1];
    let two = arr2Asc[pos2];

    if (one !== undefined && (two === undefined || (one < two))) {
      result.push(one);
      pos1++;
    } else {
      result.push(two);
      pos2++;
    }
  }
  
  return direction === 'asc' ? result : result.reverse();
};

module.exports = mergeArrays;
