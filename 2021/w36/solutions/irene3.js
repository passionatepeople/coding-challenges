const findMinInt = (array) => {
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    const n = array[i];
    if (n > smallest) continue;
    if (n % 1 !== 0) continue;
    smallest = n;
  }

  return smallest;
};

module.exports = findMinInt;