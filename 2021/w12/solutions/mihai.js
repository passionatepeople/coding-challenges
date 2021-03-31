const manipulateNumber = (n) => {
  // your solution here
  const i = Array.from(String(n), Number).reverse().join('')
  const diff = Number(n) - Number(i)
  const r =(a,c)=>a+c
  return diff > 0 ? Array.from(String(diff), Number).reduce(r) : 0 - Array.from(String(Math.abs(
      (diff))), Number).reduce(r)
};

module.exports = manipulateNumber;
