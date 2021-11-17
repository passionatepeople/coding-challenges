const toString = Number.prototype.toString
const fromCharCode = String.fromCharCode
const charCodeAt = String.prototype.charCodeAt

const binaryMemoize = {}
const toBinary = number => {
  if (binaryMemoize[number]) 
      return binaryMemoize[number]

  const result = toString.call(number, 2)
  binaryMemoize[number] = result

  return result
}

const lookup = new Array(125).fill(false)
for (let i = 0; i < 26; i++) {
  lookup[65 + i] = fromCharCode.call(null, 97 + i)
  lookup[97 + i] = fromCharCode.call(null, 65 + i)
}

module.exports = (string, number) => {
  let 
  binStr = toBinary(number),
  binLength = binStr.length - 1,
  count = 0,
  result = '',
  i = 0, 
  len = string.length, 
  ch
  
  for (i = 0; i < len; i++) {
    ch = charCodeAt.call(string, i)

    if (ch < 65 || ch == 91 || ch == 92 || ch == 93 || ch == 94 || ch == 95 || ch == 96 || ch > 122) {
      result += string[i]
    } else {
      result += binStr[count] === '1' ? lookup[ch] : string[i]
      ++count

      if (count > binLength) 
        count = 0
    }
  }
  return result
}
