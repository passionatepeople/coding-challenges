const imSpecial = (str) => {
  let countObj = {},
    chars = str.toLowerCase().split(''),
    index

  chars.map(c => countObj[c] = countObj[c] + 1 || 1)
  for (const [i, c] of chars.entries()) {
    if (countObj[c] === 1) {
      index = i
      break
    }
  }
  return str[index] || ''
}

module.exports = imSpecial;
