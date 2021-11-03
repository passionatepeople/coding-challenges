const hasItAll = (n) => {
  const _lowerCased = n.toLowerCase()
  const freqCount = {}

  for (let char of _lowerCased) {
    freqCount[char.charCodeAt()] = /[a-z]/.test(char) && 1
  }

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    if (!freqCount[i]) return false
  }

  return true
};

module.exports = hasItAll;
