module.exports = (array) => {
  const length = array.length;

  let total = 0;
  for (let i = 0; i < length; i++) {
    total += array[i];
  }

  let sum = 0;

  for (let j = 0; j < length; j++) {
    if (sum * 2 === total - array[j]) return j;
    sum += array[j];
  }

  return -1;
};
