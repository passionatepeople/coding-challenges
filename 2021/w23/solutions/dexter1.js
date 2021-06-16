const S = 'second'
const M = 'minute'
const H = 'hour'
const D = 'day'
const Y = 'year'

const durations = {
  [S]: 1,
  [M]: 60,
  [H]: 3600,
  [D]: 86400,
  [Y]: 31536000,
}

module.exports = (seconds, result='', order=[Y, D, H, M, S], amount, identifier, duration, rest) => {
  for (identifier of order) {
    duration = durations[identifier]
    if (amount = Math.floor(seconds / duration)) {
      seconds %= duration
      if (result.length) {
        result += seconds ? ', ' : ' and '
      }
      result += `${amount} ${identifier}${amount==1?'':'s'}`
    }
    if (!seconds) return result
  }
};
