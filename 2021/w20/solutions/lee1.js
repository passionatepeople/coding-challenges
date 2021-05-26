module.exports = (arr1, arr2, direction) => [].concat(arr1, arr2).sort((a, b) => (direction === "asc" ? a - b : b - a));
