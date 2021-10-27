const add = (a, b) => {
  let i = Math.max(a.length, b.length)+1
  let al = i - a.length ;
  let bl = i - b.length;
  let overflow = false
  let sum
  let numbers = new Array(i)

  while (i--) {
    sum = (a.charCodeAt(i-al)-48||0) + (b.charCodeAt(i-bl)-48||0) + overflow
    numbers[i] = sum%10 + 48
    overflow = ~~(sum/10)
  }

  return String.fromCharCode.apply(String, numbers).replace(/^0+/, '')
};

module.exports = add;
 