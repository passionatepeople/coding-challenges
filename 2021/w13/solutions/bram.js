const int2IP = (int32) => {
  let remaining = int32;
  let numbers = [];
  for (let i = 0; i < 4; i++) {
      numbers.unshift(remaining % 256);
      remaining = Math.floor(remaining / 256);
  }
  return numbers.join('.');
};
module.exports = int2IP;