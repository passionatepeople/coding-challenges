const expand = (num) => {
  let result = "";
  while (num >= 1) {
    result = (~~(num % 10)) ** 2 + result;
    num = ~~num / 10;
  }

  return +result;
};

module.exports = expand;