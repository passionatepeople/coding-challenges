const isInteger = Number.isInteger;

module.exports = (array) => {
  let result = Infinity;

  for (let number, i = array.length; i--; ) {
    number = array[i];
    if (isInteger(number) && number < result) {
      result = number;
    }
  }

  return result;
};