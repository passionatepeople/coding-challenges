const codeAt = String.prototype.charCodeAt
const substr = String.prototype.substring
const toNum = (s, i) =>  codeAt.call(s, i) - 48

module.exports = (n1, n2) => {
  let nn1 = n1[0] === '0' ? substr.call(n1, 1, n1.length) : n1,
      nn2 = n2[0] === '0' ? substr.call(n2, 1, n2.length) : n2,
      total = '', borrow = false, count = 1, ch1, ch2, len, isMinus = false,
      a, b, lenA, lenB
  
      nn2.length === nn1.length
      ? ~~(nn2[0]+nn2[1]) > ~~(nn1[0]+nn1[1])
        ? (a=n1,b=n2,isMinus=!0) : (a=nn2,b=nn1)
      : nn2.length > nn1.length
        ? (a=nn1,b=nn2,isMinus=!0) : (a=nn2,b=nn1)

    len = a.length, lenA = a.length, lenB = b.length

    ch1 = toNum(a, lenA - count)
    ch2 = toNum(b, lenB - count)
  
    while (len--) {
      if (ch2 >= ch1) {
        total = ch2 - ch1 + total
        borrow = false
        count++
  
        ch1 = lenA >= count ? toNum(a, lenA - count) : 0
        ch2 = lenB >= count ? toNum(b, lenB - count) : 0
      } else {
        ch2 += 10
        total = ch2 - ch1 + total
        count++
  
        ch1 = lenA >= count ? toNum(a, lenA - count) : 0
        ch2 = lenB >= count ? toNum(b, lenB - count) : 0
  
        while (ch2 == 0 && lenB >= count) {
          total = 9 - ch1 + total
          count++
          ch1 = lenA >= count ? toNum(a, lenA - count) : 0
          ch2 = lenB >= count ? toNum(b, lenB - count) : 0
        }
  
        ch2 = ch2 - 1
  
        borrow = true
      }
    }
  
    if (borrow)
      total = ch2 - ch1 + total, count++
  
    let diff = lenB - count
    if (diff >= 0)
      total = substr.call(b, 0, diff + 1) + total
      
    if (total[0] == '0') {
      for (i = 0, ch1 = total[i]; ch1 === '0'; ) i++, ch1 = total[i]
      
      total = substr.call(total, i, total.length)
    }
  
    return isMinus ? '-' + total : total
  }