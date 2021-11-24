const wheatFromTheChaff = (data) => {
  let numbers = data.match(/[1-9]([0-9]?)+/g);
  if (!numbers) return 0;
  let largest = +numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (largest < +numbers[i]) {
      largest = +numbers[i];
    }
  }
  return largest;
};

module.exports = wheatFromTheChaff;
