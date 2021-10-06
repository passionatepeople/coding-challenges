function removeDupes(str) {
  let lowerStr = str.toLowerCase()
  let newStr = String.fromCharCode(str.charCodeAt(0))
  let prev = String.fromCharCode(lowerStr.charCodeAt(0))
  for (let i = 1; i < str.length; i++) {
    let lowerCharCode = lowerStr.charCodeAt(i);
    let lowerChar = String.fromCharCode(lowerCharCode)
    if (lowerChar === prev && lowerCharCode > 96 && lowerCharCode < 123) {
      continue
    }
    newStr += String.fromCharCode(str.charCodeAt(i))
    prev = lowerChar;
  }
  return newStr
}

module.exports = removeDupes;
