function reverseNum(n) {
  let num, result = 0;
  while (n) {
    num = n % 10;
    result = (result * 10) + num;
    n = n / 10 | 0;
  }
  return result
}

function add(n) {
  let result = 0;
  while (n) {
    result += n % 10;
    n = n / 10 | 0;
  }
  return result;
}

const manipulateNumber = (number) => {
  const revNum = reverseNum(number);
  const remainder = number - revNum;

  if (remainder >= 0) {
    return add(remainder);
  }

  const num = revNum - number;
  return add(num) * -1;
};

module.exports = manipulateNumber;
