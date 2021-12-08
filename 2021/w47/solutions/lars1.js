const split = String.prototype.split
const pingMeMaybe = (ip) => {
  const ipv4s = split.call(ip, '.')
  for(let n of ipv4s) {
    if((n | 0) > 255) return false;
  }
  return true;
};

module.exports = pingMeMaybe;
