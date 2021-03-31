const reversedRest = num => num - parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
const manipulateNumber = (number) => {
  const step = reversedRest(number);
  return Math.abs(step)
    .toString()
    .split('')
    .reduce((accumulator, num) => accumulator + parseFloat(num), 0) * Math.sign(step);
};

module.exports = manipulateNumber;
