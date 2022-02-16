const whatsMissing = (arr) => {
  // your solution here
  const alphabet = (/^[^a-z]*$/).test(arr[0])
    ? ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    indexOffset = alphabet.indexOf(arr[0])
  let i = 1
  while (i < arr.length) {
    const missingChar = alphabet[i + indexOffset]
    if (arr[i] !== missingChar) {
      return missingChar
    }
    i++
  }
}

module.exports = whatsMissing;
