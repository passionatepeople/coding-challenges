module.exports = n => {
  let r = '', d = 1

  while (n) {
    let m = n % 10
    r = (m ? m * d + (r && ' + ') : '') + r
    n = n / 10 | 0
    d *= 10
  }

  return r
}