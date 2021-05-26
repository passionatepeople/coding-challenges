const mergeArrays = (arr1, arr2, direction) => {
  return [...arr1, ...arr2].sort((a, b) => {
    return direction == 'asc' ? a - b : b - a;
  });
};

module.exports = mergeArrays;
