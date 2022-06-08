const expand = (num) => {
  let result = 0,
    decimal = 1;

  while (num) {
    let d = num % 10;
    result += decimal * d * d;
    decimal *= d < 4 ? 10 : 100;
    num = (num / 10) << 0;
  }

  return result;
};

module.exports = expand;