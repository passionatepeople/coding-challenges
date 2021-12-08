const charCodeAt = String.prototype.charCodeAt;

const pingMeMaybe = (ip) => {
  let length = ip.length,
    tmpNumber = 0,
    i = 0,
    code;

  for (; i < length; i++) {
    code = charCodeAt.call(ip, i);
    if (code == 46) {
      if (tmpNumber > 255) return false;
      tmpNumber = 0;
    } else {
      tmpNumber = tmpNumber * 10 + code - 48;
    }
  }
  return tmpNumber < 256;
};

module.exports = pingMeMaybe;
