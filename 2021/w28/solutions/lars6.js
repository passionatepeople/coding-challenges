const gcd = (num1, num2) => {
  let r = 0;

  while((num1 % num2) > 0) {
    r = num1 % num2
    num1 = num2
    num2 = r
  }

  return num2
};

module.exports = gcd;
