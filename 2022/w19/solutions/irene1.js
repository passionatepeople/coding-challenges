const bigFive = (number) => {
  let current = +number.substring(0, 5);
  let biggest = current;

  for (let i = 5; i <= number.length - 1; i++) {
    current = (current - +number[i-5]*10000) * 10 + +number[i];
    if (current > biggest) biggest = current;
  }

  return biggest;
};

module.exports = bigFive;