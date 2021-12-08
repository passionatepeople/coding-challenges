const test = RegExp.prototype.test

const regex = new RegExp('25[6-9]|2[6-9][0-9]')

const pingMeMaybe = (ip) => !test.call(regex, ip)

module.exports = pingMeMaybe;