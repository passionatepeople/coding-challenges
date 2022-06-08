const expand = (num) => {
  let str = String(num);

  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] ** 2;
  }
  return +result;
};

module.exports = expand;