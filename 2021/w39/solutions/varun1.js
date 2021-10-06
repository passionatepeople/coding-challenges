function removeDupes(str) {
  let strLength = str.length
  if (strLength < 2) {
    return str
  }

  let newStr = '';
  let prev = ''
  let prevLowerCase = true
  for (let i = 0; i < strLength; i++) {
    const char = str.charAt(i);
    const charCode = char.charCodeAt(0)
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      newStr += char
      prev = char;
      continue
    }

    const charLowerCase = charCode > 96
    let add = false;
    if (charLowerCase === prevLowerCase) {
      if (char !== prev) {
        add = true
      }
    } else if (prevLowerCase) {
      if (char.toLowerCase() !== prev) {
        add = true
        prevLowerCase = false
      }
    } else if (charLowerCase) {
      if (char !== prev.toLowerCase()) {
        add = true
        prevLowerCase = true
      }
    }
    if (add) {
      newStr += char
      prev = char;
    }
  }
  return newStr
}

module.exports = removeDupes;
