const bigFive = (number) => {
  // your solution here
  let highestIndex = 0;
  for (let i = 1; i <= number.length - 5; i++) {
    if (number.charCodeAt(highestIndex) === number.charCodeAt(i)) {
      if (number.charCodeAt(highestIndex + 1) === number.charCodeAt(i + 1)) {
        if (number.charCodeAt(highestIndex + 2) === number.charCodeAt(i + 2)) {
          if (
            number.charCodeAt(highestIndex + 3) === number.charCodeAt(i + 3)
          ) {
            if (
              number.charCodeAt(highestIndex + 4) < number.charCodeAt(i + 4)
            ) {
              highestIndex = i;
            }
          }
          if (number.charCodeAt(highestIndex + 3) < number.charCodeAt(i + 3)) {
            highestIndex = i;
          }
        }
        if (number.charCodeAt(highestIndex + 2) < number.charCodeAt(i + 2)) {
          highestIndex = i;
        }
      }

      if (number.charCodeAt(highestIndex + 1) < number.charCodeAt(i + 1)) {
        highestIndex = i;
      }
    }
    if (number.charCodeAt(highestIndex) < number.charCodeAt(i)) {
      highestIndex = i;
    }
  }
  return parseInt(number.slice(highestIndex, highestIndex + 5));
};

module.exports = bigFive;