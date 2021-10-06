const buff = []
const toLowerCode = (chCode) => {
  let c = buff[chCode]
  if (buff[chCode]) {
    return c
  }

  c = chCode > 64 && chCode < 91 ? chCode + 32 : chCode
  buff[chCode] = c
  return c
}

module.exports = string => {
    let chCode, code, prevCode, i, len = string.length, output = ''
  
    for (i = 0; i < len; i++) {
      chCode = string.charCodeAt(i)
      code = toLowerCode(chCode)
  
      if (prevCode && prevCode === code)
        continue
  
      if (code > 96 && code < 123) {
        output += string[i]
        prevCode = code
        continue
      }

      output += string[i]
      prevCode = ''
    }

    return output
}
