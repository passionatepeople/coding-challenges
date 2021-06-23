const code = c => c > 57 ? c - 87 : c - 48

const findBase = (num1, num2, product) => {
  let size = Math.max(num1.length, num2.length, product.length)
  let base = 2
  let r1, r2, rp, value, char
  loop: while (true) {
    r1=r2=rp=0
    for (let i=0; i<size; i++) {
      char = num1.charCodeAt(i)
      value = code(char)
      if (char) {
        if (isNaN(value)) { base++; continue loop }
        if (value >= base) {
          base = value + 1
          continue loop
        }
        r1 = base * r1 + value
      }

      char = num2.charCodeAt(i)
      value = code(char)
      if (char) {
        if (isNaN(value)) { base++; continue loop }
        if (value >= base) {
          base = value + 1
          continue loop
        }
        r2 = base * r2 + value
      }

      char = product.charCodeAt(i)
      value = code(char)
      if (char) {
        if (isNaN(value)) { base++; continue loop }
        if (value >= base) {
          base = value + 1
          continue loop
        }
        rp = base * rp + value
      }
    }
    if (r1 * r2 === rp) return base
    base++
  } 
};

module.exports = findBase;
