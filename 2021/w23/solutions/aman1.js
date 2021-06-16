const TIME = [31536000, 86400, 3600, 60, 1]
const singular = [' year', ' day', ' hour', ' minute', ' second']
const plural = [' years', ' days', ' hours', ' minutes', ' seconds']

module.exports = sec => {
  let result = ''
  for (let i = 0, val, isPlural = false, n; i < 5; i++) {
    n = TIME[i]
    if (sec >= n) {
      val = Math.floor(sec / n)
      sec = sec % n
      isPlural = val > 1

      if (sec === 0) {
        result += isPlural ? ' and ' + val + plural[i] : ' and ' + val + singular[i]
        break

      } else {
        result += result ?
          isPlural ? ', ' + val + plural[i] : ', ' + val + singular[i]
          : isPlural ? val + plural[i] : val + singular[i]
      }
    }
  }

  return result
}
