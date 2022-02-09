const charCodeAt = String.prototype.charCodeAt

const ascii = new Array(255)
for (let i = 0; i < 26; i++) {
  ascii[65 + i] = 97 + i
  ascii[97 + i] = 97 + i
}

const imSpecial = (str) => {
  const arr = new Array(255)
  const len = str.length

  // track repeats
  for (let i = 0; i < len; i++) {
    let code = ascii[charCodeAt.call(str, i)]
    let value = arr[code]
    arr[code] = value ? value + 1 : 1
  }

  // find first no-repeating character
  for (let i = 0; i < len; i++) {
    let code = ascii[charCodeAt.call(str, i)]
    if (arr[code] === 1) {
      return str[i]
    }
  }

  return ''
}

module.exports = imSpecial
