const mergeArrays = (arr1, arr2, direction) => {
  const copy1 = [...arr1];
  const copy2 = [...arr2];

  let arr1Asc = arr1[0] < arr1[arr1.length - 1] ? copy1 : copy1.reverse();
  let arr2Asc = arr2[0] < arr2[arr2.length - 1] ? copy2 : copy2.reverse();

  let current = 0;
  let pos1 = 0;
  let pos2 = 0;
  let result = [];
  while (current < arr1.length + arr2.length) {
    let one = arr1Asc[pos1];
    let two = arr2Asc[pos2];

    let arr1Empty = one === undefined;
    let arr2Empty = two === undefined;

    if (!arr1Empty && (arr2Empty || (arr1Asc[pos1] < arr2Asc[pos2]))) {
      result[current] = one;
      pos1++;
    } else {
      result[current] = two;
      pos2++;
    }

    current++;
  }
  
  return direction === 'desc' ? result.reverse() : result;
};

module.exports = mergeArrays;