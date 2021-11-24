const charCodeAt = String.prototype.charCodeAt

module.exports = data => {
  let 
    len = data.length,
    value = 0,
    wheat = 0,
    i = 0,
    ch

  for (i = 0; i < len; i++) {
    ch = charCodeAt.call(data, i);

    if (ch <= 57) {
      value = (value * 10) + (ch - 48)

      if (charCodeAt.call(data, i + 1) > 57) {
        if (value > wheat) {
          wheat = value
        }
        value = 0
      }
    }
  }

  if (value > wheat) {
      wheat = value
  }

  return wheat
}