const pow = [1, 10, 100, 1000, 10000, 100000]

module.exports = (num) => {
  if (!num) return ''

  if (num <= 10) return '' + num

  let count = 0, digit, result = ''

  for ( ;num > 0; count++ ) {
    digit = num % 10
    num = ~~(num / 10)

    if (!digit) continue

    if (count == 0) {
      result = '' + digit
      continue
    }

    if (result)
      result = digit * pow[count] + ' + ' + result
    else
      result = '' + digit * pow[count]
  }

  return result
}
