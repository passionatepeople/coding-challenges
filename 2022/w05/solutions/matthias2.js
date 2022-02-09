const imSpecial = (str) => {
  const chars = str.toLowerCase()
  const charCount = chars.split('').reduce((acc, curr, index, array) => {
    return acc.concat(array.filter(char => char === curr).length)
  }, [])
  return str.split('')[charCount.indexOf(1)] || ''
}

module.exports = imSpecial;
