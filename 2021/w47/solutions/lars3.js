const pingMeMaybe = (ip) => {
  let temp = ""

  const length = ip.length
  let i = 0
  for (;i < length; i++) {
    if (ip[i] === '.') continue;

    temp += ip[i]

    if (ip[i + 1] === '.' || i === length - 1) {
      if((temp | 0) > 255) return false;
      temp = ""
    }
  }

  return true;
};

module.exports = pingMeMaybe;
