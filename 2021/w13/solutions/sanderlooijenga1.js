const int2IP = (int32) => {
  const digits = [];

  for (let i = 3; i >= 0; i--) {
    let digit;
    if (i) {
      let divider = Math.pow(256, i);

      digit = ((int32 / divider) | 0) % 256;
    } else {
      digit = int32 % 256;
    }

    digits.push(digit);
  }

  return digits.join('.');
};

module.exports = int2IP;