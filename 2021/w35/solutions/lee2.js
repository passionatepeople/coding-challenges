const sortItOut = (number) => {
  let num = number.toString();
  let res = "";
  let resZero = "";
  for (i = 0; i < num.length; i++) {
    if (num[i] !== "0") {
      res += num[i];
    } else {
      resZero += "0";
    }
  }

  return +(res + resZero);
};

module.exports = sortItOut;
