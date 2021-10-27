const add = (a, b) => {
  let al = a.length
  let bl = b.length
  let overflow = false
  let sum
  let numbers = []
  let result = ''

  while (al>0 || bl>0) {
    sum = (a.charCodeAt(--al)-48||0) + (b.charCodeAt(--bl)-48||0) + overflow
    overflow = ~~(sum/10)
    numbers.unshift(sum%10)
  }
  if (overflow)
    numbers.unshift(overflow)

  for (let c of numbers) {
    if (result || c) {
      result += String.fromCharCode(c+48)
    }
  }
    
  return result
};

module.exports = add;
