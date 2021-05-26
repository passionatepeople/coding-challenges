const mergeArrays = (arr1, arr2, direction) => {
  return [...arr1, ...arr2].sort((a, b) => direction === 'desc' ? (b - a) : (a - b));
};

module.exports = mergeArrays;
