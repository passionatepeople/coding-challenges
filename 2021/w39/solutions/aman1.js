module.exports = string => {
    let chCode, code, prevCode, i, len = string.length, output = []
  
    for (i = 0; i < len; i++) {
      chCode = string.charCodeAt(i)
      code = (chCode >= 65 && chCode <= 90) ? chCode + 32 : chCode
  
      if (prevCode && prevCode === code)
        continue
  
      if (code >= 97 && code <= 122) {
        output.push(chCode)
        prevCode = code
        continue
      }

      output.push(chCode)
      prevCode = null
    }

    return String.fromCharCode.apply(null, output)
}
