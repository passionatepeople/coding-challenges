const regex = /^((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/

const pingMeMaybe = (ip) => regex.test(ip)

module.exports = pingMeMaybe;