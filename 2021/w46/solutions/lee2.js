const wheatFromTheChaff = (data) => {
  let numbers = data.match(/[1-9]([0-9]?)+/g);
  if (!numbers) return 0;
  let largest = +numbers[0];
  let largestLength = numbers[0].length;
  for (let i = 1; i < numbers.length; i++) {
    if (largestLength < numbers[i].length) {
      largest = +numbers[i];
      largestLength = numbers[i].length;
      continue;
    }
    if (largest < +numbers[i]) {
      largest = +numbers[i];
      largestLength = numbers[i].length;
    }
  }
  return largest;
};

module.exports = wheatFromTheChaff;
