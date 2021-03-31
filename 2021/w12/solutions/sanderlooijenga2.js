const flipDigits = (n) => {
  let result = 0,
    digit;

  while (n) {
    digit = n % 10; //  Get right-most digit. Ex. 123/10 → 12.3 → 3
    result = (result * 10) + digit; //  Ex. 123 → 1230 + 4 → 1234
    n = n / 10 | 0; //  Remove right-most digit. Ex. 123 → 12.3 → 12
  }

  return result;
}

const sumOfDigits = (n) => {
  let result = 0,
    digit;

  while (n) {
    digit = n % 10;
    result += digit;
    n = (n - digit) / 10;
  }

  return result;
}

let manipulateNumber = (number) => {
  const reversed = flipDigits(number);
  const subtracted = number - reversed;

  return sumOfDigits(subtracted);
};

module.exports = manipulateNumber;