module.exports = (array, max=0) => {
  array.reduce((sum, value) =>  {
    let localMax = Math.max(sum + value, value)
    max = Math.max(localMax, max)
    return localMax
  }, 0)
  return max
};
