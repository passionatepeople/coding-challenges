const getMaxConsequentItemSum = (arr) => {
  // your solution here
  let max = 0;
  let current = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
      const item = arr[i];

      if (item < 0) {
          if (current === 0) {
              continue;
          }

          max = max > current ? max : current;

          if (-item >= current) {
              current = 0;
              continue;
          }
      }

      current += item;
  }

  return max > current ? max : current;
};

module.exports = getMaxConsequentItemSum;
