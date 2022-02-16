const whatsMissing = (arr) => {
  // your solution here
  const alphabet = arr[0] == arr[0].toUpperCase()
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    : 'abcdefghijklmnopqrstuvwxyz'
  let i = 1
  while (i < arr.length) {
    const missingChar = alphabet.charAt(i + alphabet.indexOf(arr[0]))
    if (arr[i] !== missingChar) {
      return missingChar
    }
    i++
  }
  return char
};

module.exports = whatsMissing;
