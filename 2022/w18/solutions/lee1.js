const allTogether = (number) => {
  let res = 0,
    num = number;
  while (num) {
    num = num;
    res += num % 10;
    num = ~~(num / 10);
  }

  return res;
};

module.exports = allTogether;