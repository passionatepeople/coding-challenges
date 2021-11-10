const splice = Array.prototype.splice

const offWithIt = (arr) => {
  const length = arr.length
  let result = new Array(length)

  let lowestIndex = length - 1
  let lowestNumber = 50

  for (let i = 0; i < length; i++) {
    result[i] = arr[i]

    if (arr[i] < lowestNumber) {
      lowestIndex = i;
      lowestNumber = arr[i]
    }
  }

  splice.call(result, lowestIndex, 1)

  return result;
};

module.exports = offWithIt;
