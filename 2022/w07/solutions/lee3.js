const minAndMax = (array) => {
  let min = array[0],
    max = array[0];

  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    min = value < min ? value : min;
    max = value > max ? value : max;
  }

  return [min, max];
};

module.exports = minAndMax;
