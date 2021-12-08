const pingMeMaybe = (ip) => {
  let length = ip.length,
    tmpNumber = 0,
    i = 0;

  for (; i < length; i++) {
    const char = ip[i];
    if (char == ".") {
      if (tmpNumber > 255) return false;
      tmpNumber = 0;
    } else {
      tmpNumber = tmpNumber * 10 + +char;
    }
  }
  return tmpNumber < 256;
};

module.exports = pingMeMaybe;
