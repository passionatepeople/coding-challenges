const manipulateNumber = (number) => {
  let reverse = 0;
  for (let n = number; n > 0; n = n / 10 >> 0) {
    reverse = reverse * 10 + n % 10;    
  }

  let s = number - reverse;
  const multiplier = Math.sign(s);

  let sum = 0;
  for(s *= multiplier; s > 0; s = s / 10 >> 0) {
    sum += s % 10;
  }
  return sum * multiplier;
};

module.exports = manipulateNumber;