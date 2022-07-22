const charCodeAt = String.prototype.charCodeAt;

const getCount = (ip) => {
  let i = 0,
    len = ip.length,
    result = 0,
    part = 0;

  while (i < len) {
    let code = charCodeAt.call(ip, i) - 48;
    if (code < 0) {
      result = result * 256 + part;
      part = 0;
    } else {
      part = part * 10 + code;
    }

    i += 1;
  }

  return result * 256 + part;
};

const thingsBetweenUs = (ip1, ip2) => {
  return getCount(ip2) - getCount(ip1) - 1;
};

module.exports = thingsBetweenUs;