const gcd = (num1, num2) => {
  while(num2) {
    let t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};

module.exports = gcd;