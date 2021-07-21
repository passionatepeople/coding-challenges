const gcd = (num1, num2) => {
  if (num2 > num1) {
    let tmp = num1;
    num1 = num2;
    num2 = tmp;
  }

  while(true) {
    num1 %= num2;
    if (num1 == 0) return num2;
    num2 %= num1
    if (num2 == 0) return num1;
  }
};

module.exports = gcd;