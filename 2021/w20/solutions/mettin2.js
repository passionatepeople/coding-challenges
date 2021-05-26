const insertionSort = array => {
  let current;
  let j;
  for (let i = 1, limit = array.length; i < limit; i += 1) {
    current = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = current;
  }
  return array;
}
module.exports =  (arr1, arr2, direction) => {
  const result = insertionSort([...arr2, ...arr1]);
  if (direction === 'asc') {
    return result
  }
  return result.reverse()
};

