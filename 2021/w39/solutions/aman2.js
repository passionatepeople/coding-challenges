module.exports = string => {
    let chCode, code, prevCode, i, len = string.length, output = ''
  
    for (i = 0; i < len; i++) {
      chCode = string.charCodeAt(i)
      code = (chCode > 64 && chCode < 91) ? chCode + 32 : chCode
  
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
