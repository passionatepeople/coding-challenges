const slice = Array.prototype.slice;

const truncIt = (arr) => {
  const length = arr.length
  const numbers = slice.call(arr, 0)

  for (let i = 0; i < length; i++) {
    let minimum = i;
    for (let j = i + 1; j < length; j++) {
      if (numbers[minimum] > numbers[j]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      [numbers[i], numbers[minimum]] = [numbers[minimum], numbers[i]];
    }
  }

  let result = 0;

  for (let j = 1; j < length - 1; j++) {
    result += numbers[j]
  }

  return result;
};

module.exports = truncIt;
