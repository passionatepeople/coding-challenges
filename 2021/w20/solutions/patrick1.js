const mergeArrays = (a, b, direction) => {
  return [...a, ...b].sort((a, b) => direction==='asc' ? a-b : b-a);
};
module.exports = mergeArrays;