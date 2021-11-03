const A=67108863
const hasItAll = (n) => {
  let all = 0
  let i = n.length
  while (i--) {
    let c = n.charCodeAt(i)
    if (c > 90) c -= 32
    c -= 65
    if (c >= 0 && c < 26)
        all |= 1 << c
    }
  return all==A
};

module.exports = hasItAll;