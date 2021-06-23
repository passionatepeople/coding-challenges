const code = c => c > 57 ? c - 87 : c - 48
const debase = (num, base) => {
  let res = 0
  for (let value of num) {
    res *= base
    res += value;
  }
  return res;
};
const deconstruct = num => num.split``.map(c => code(c.charCodeAt()))

const findBase = (num1, num2, product) => {
  num1 = deconstruct(num1)
  num2 = deconstruct(num2)
  product = deconstruct(product)
  let base = Math.max.apply(null,num1.concat(num2, product)) + 1
  while (debase(num1, base) * debase(num2, base) !== debase(product, base)) {
    base++
  } 
  return base
};

module.exports = findBase;
