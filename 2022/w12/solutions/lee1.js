const expandIt = (num) => {
  if (num === 0) return "";
  let str = num.toString();
  let res = str[0] + "0".repeat(str.length - 1);
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== "0") {
      res += " + " + str[i] + "0".repeat(str.length - i - 1);
    }
  }

  return res;
};

module.exports = expandIt;
