const toDigits = (string) => {
  const result = [];
  for (let digit, i = 0; i < string.length; i++) {
    digit = string.charCodeAt(i);
    result.push(digit <= 57 ? digit - 48 : digit - 87);
  }
  return result;
};

const toNumber = (digits, base) => {
  let result = 0;
  for (let i = 0; i < digits.length; i++) {
    result = base * result + digits[i];
  }
  return result;
};

const findBase = (num1, num2, product) => {
  const num1Digits = toDigits(num1);
  const num2Digits = toDigits(num2);
  const productDigits = toDigits(product);
  for (let base = 2; base <= 36; base++) {
    if (
      toNumber(num1Digits, base) * toNumber(num2Digits, base) ==
      toNumber(productDigits, base)
    ) {
      return base;
    }
  }
  return 36;
};

module.exports = findBase;