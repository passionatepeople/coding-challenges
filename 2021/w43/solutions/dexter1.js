const chars = new Set([...Array(26)].map((_, i) => 65+i))
const hasItAll = (n) => {
  const all = new Set(chars)
  let i = n.length
  while (i--) {
    let c = n.charCodeAt(i)
    if (c >= 97) c -= 32

    all.delete(c)

    if (!all.size) return true
  }

  return !all.size
};

module.exports = hasItAll;
