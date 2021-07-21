const largestCommonDivisor = (x, y) => y === 0 ? x : largestCommonDivisor(y, x % y);


module.exports = largestCommonDivisor;
