const numberToArray = n =>  Array.from(String(n), Number)
const reversedNum = n => numberToArray(n).reverse().join('')
const sumCyphers = n => numberToArray(n).reduce((a, b) => a + b, 0)

const manipulateNumber = (a) => {
  // your solution here
  const c = a - reversedNum(a)
  const sign = Math.sign(c)
  return sign * sumCyphers(Math.abs(c));
};

module.exports = manipulateNumber;
