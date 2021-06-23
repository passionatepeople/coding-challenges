const code = c => c > 57 ? c - 87 : c - 48
const debase = (str, base) => {
  let res = code(str.charCodeAt(0))
  const strLength = str.length
  for (let i=1; i<strLength; i++) {
      res *= base
      const value = code(str.charCodeAt(i))
      if (value >= base) return
      res += value;
  }
  return res;
};

const findBase = (num1, num2, product) => {
  let base = Math.max(...(num1+num2+product).split('').map(c => code(c.charCodeAt()))) + 1
  while (debase(num1, base) * debase(num2, base) !== debase(product, base)) {
    base++
  } 
  return base
};

module.exports = findBase;
