const whatsMissing = (arr) => {
  // your solution here
  const alphabet = (/^[^a-z]*$/).test(arr[0])
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    : 'abcdefghijklmnopqrstuvwxyz',
    indexOffset = alphabet.indexOf(arr[0])
  let i = 1
  while (i < arr.length) {
    const missingChar = alphabet.charAt(i + indexOffset)
    if (arr[i] !== missingChar) {
      return missingChar
    }
    i++
  }
  return char
}

module.exports = whatsMissing;
