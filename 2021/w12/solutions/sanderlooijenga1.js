const toStringArray = (number) => number.toString().split('');

let manipulateNumber = (number) => {
  const reversed = parseInt(toStringArray(number).reverse().join(''), 10)
  const subtracted = number - reversed;

  let finalNumber = toStringArray(Math.abs(subtracted)).map(Number).reduce((a, b) => a + b);
  
  if (subtracted !== 0) {
    finalNumber *= Math.sign(subtracted);
  }

  return finalNumber;
};

module.exports = manipulateNumber;