function removeDupes(str) {
  const lowerStr = str.toLowerCase()
  let newStr = str.charAt(0);
  let prev = lowerStr.charAt(0)
  for (let i = 1; i < str.length; i++) {
    const lowerCharCode = lowerStr.charCodeAt(i);
    const lowerChar = String.fromCharCode(lowerCharCode)
    if (lowerChar === prev && lowerCharCode > 96 && lowerCharCode < 123) {
      continue
    }
    newStr += str.charAt(i)
    prev = lowerChar;
  }
  return newStr
}

module.exports = removeDupes;
