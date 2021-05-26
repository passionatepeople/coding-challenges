const mergeArrays = (arr1, arr2, direction) => {
  const mergedArray = [...arr1, ...arr2]

  if (direction === 'asc') {
    return mergedArray.sort((a, b) => a - b)
  }

  return mergedArray.sort((a, b) => b - a)
}

module.exports = mergeArrays
