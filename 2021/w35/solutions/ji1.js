const sortItOut = (number) => {
  // your solution here
  const digits = [];

  while (number > 0) {
    if (number % 10 === 0) {
      digits.push(0)
    } else {
      digits.unshift(number % 10);
    }
    number = Math.trunc(number / 10);
  }

  return +digits.join("");Ï
};

module.exports = sortItOut;
