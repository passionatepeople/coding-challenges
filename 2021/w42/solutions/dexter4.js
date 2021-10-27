const add = (a, b) => {
  let al = a.length
  let bl = b.length
  let overflow = false
  let sum
  let numbers = []

  while (al>0 && bl>0 || overflow) {
    sum = (a.charCodeAt(--al)-48||0) + (b.charCodeAt(--bl)-48||0) + overflow
    overflow = ~~(sum/10)
    numbers.unshift(sum%10 + 48)
  }

  return (a.substr(0, al) + b.substr(0, bl) + String.fromCharCode.apply(String, numbers)).replace(/^0+/, '')
};

module.exports = add;
 