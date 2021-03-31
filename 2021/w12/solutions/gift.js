const manipulateNumber = (number) => {
  // reverse the number
  let reversedNumber;
  reversedNumber = parseFloat(
    number.toString().split('').reverse().join('') * Math.sign(number)
  );

  // subtract from original number
  const subtractedNumber = number - reversedNumber;

  // sum up all the returned number from above and return the sign(+/-)
  const C = Math.abs(subtractedNumber);
  const sumDigits = C.toString().split('').map(Number);
  const reduceDigits = (a, b) => a + b;

  if (subtractedNumber >= 0) {
    return parseFloat(sumDigits.reduce(reduceDigits));
  } else {
    return parseFloat('-' + sumDigits.reduce(reduceDigits));
  }
};

module.exports = manipulateNumber;
