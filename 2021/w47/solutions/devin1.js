const match = String.prototype.match;
module.exports = (ip) => !!match.call(ip, /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/);