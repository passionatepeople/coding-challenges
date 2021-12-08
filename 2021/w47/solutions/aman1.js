const charCodeAt = String.prototype.charCodeAt

module.exports = ip => {
  let c = 0, ch, len = ip.length, i = 0

  for (; i < len; i++) {
    ch = charCodeAt.call(ip, i)

    if (ch === 46) {
      if (c > 255) {
        return false
      }
      c = 0
    } else {
      c = ( c * 10 ) + ch - 48
    }
  }

  return !(c > 255)
}
