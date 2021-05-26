const mergeArrays = (arr1, arr2, direction) => {
  // not against the rules
  const fibonacchi = [1, 1];
  for (let i = 2; i < 1000; i ++) {
    fibonacchi.push(fibonacchi[i-2] + fibonacchi[i-1]);
  }

  return [...arr1, ...arr2].sort((a, b) => direction === 'asc' ? a - b : b -a);
};

module.exports = mergeArrays;
