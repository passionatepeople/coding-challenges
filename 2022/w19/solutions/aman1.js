const charCodeAt = String.prototype.charCodeAt

module.exports = number => {
  let len = number.length - 5,
      five = ((charCodeAt.call(number, 0) - 48) * 10000)
        + ((charCodeAt.call(number, 1) - 48) * 1000)
        + ((charCodeAt.call(number, 2) - 48) * 100)
        + ((charCodeAt.call(number, 3) - 48) * 10)
        + (charCodeAt.call(number, 4) - 48),
      value,
      i = 1

  for (; i <= len; i++) {
    value = ((charCodeAt.call(number, i) - 48) * 10000)
      + ((charCodeAt.call(number, i + 1) - 48) * 1000)
      + ((charCodeAt.call(number, i + 2) - 48) * 100)
      + ((charCodeAt.call(number, i + 3) - 48) * 10)
      + (charCodeAt.call(number, i + 4) - 48)

    if (value > five)
      five = value
  }

  return five
}