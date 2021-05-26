const a = (a,b) => a - b
const d = (a,b) => b - a
module.exports = (arr1, arr2, direction) => [...arr1, ...arr2].sort(direction === 'asc' ? a : d)
