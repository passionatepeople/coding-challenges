const mergeArrays = (arr1, arr2, direction) => {
  const newArr = [...arr1, ...arr2]

  if (direction === 'asc') {
    return newArr.sort((a,b) => a-b)
  }

  return newArr.sort((a,b) => b-a)
};

module.exports = mergeArrays;