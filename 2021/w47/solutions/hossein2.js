const pingMeMaybe = (ip) => {
  let length = ip.length,
    parts = 0,
    tmpNumber = 0,
    i = 0;

  for (; i < length; i++) {
    const char = ip[i];
    if (char == ".") {
      if (tmpNumber > 255) return false;
      parts++;
      tmpNumber = 0;
    } else {
      tmpNumber = tmpNumber * 10 + +char;
    }
  }
  return parts === 3 && tmpNumber <= 255;
};

module.exports = pingMeMaybe;
