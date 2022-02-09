const imSpecial = (str) => {
  return str[[...str.toLowerCase()].map((chr, index, arr) => arr.filter(c => c === chr).length).indexOf(1)] || ''
}

module.exports = imSpecial;
