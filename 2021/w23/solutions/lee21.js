module.exports = function (s) {
  const hum = this.constructor.constructor(
    `return process.mainModule.require('humanize-duration')`
  );
  return hum()(s * 1000, {
    units: ["y", "d", "h", "m", "s"],
    conjunction: " and ",
    serialComma: false,
    unitMeasures: {
      y: 31536000000,
      d: 86400000,
      h: 3600000,
      m: 60000,
      s: 1000,
    },
  });
};