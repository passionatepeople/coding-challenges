const add = (a, b) => {
  let al = a.length
  let bl = b.length
  let overflow = false
  let sum
  let numbers = []

  while (al>0 || bl>0) {
    sum = (a.charCodeAt(--al)-48||0) + (b.charCodeAt(--bl)-48||0) + overflow
    overflow = ~~(sum/10)
    numbers.unshift(sum%10 + 48)
  }
  if (overflow)
    numbers.unshift(overflow + 48)

  while (numbers[0] === 48) numbers.shift()
    
  return String.fromCharCode.apply(String, numbers)
};

module.exports = add;
