const chunk = (str, chunkSize, charCount) => {
  let index = 0;
  let tempArray = []

  for (index = 0; index < charCount; index += chunkSize) {
    const chunk = str.slice(index, index + chunkSize)
    tempArray.push(chunk)
  }

  return tempArray
}

const repeat = (string, n) => {
  let result = ''

  if (n < 1) {
    return ''
  }

  if (n === 1) {
    return string
  }

  do {
    if (n % 2) {
      result += string
    }
    n = Math.floor(n / 2)
    if (n) {
      string += string
    }
  } while (n)

  return result
}

const chopMeUp = (string, n = 2, s = '_') => {
  const length = string.length
  const arrayLength = Math.ceil(length / n)
  const charCount = arrayLength * n
  const missingChars = charCount - length

  const strPadded = string + repeat(s, missingChars)

  return chunk(strPadded, n, charCount);
};

module.exports = chopMeUp;
