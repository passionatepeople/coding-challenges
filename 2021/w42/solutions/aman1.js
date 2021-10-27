const charCodeAt = String.prototype.charCodeAt
const substr = String.prototype.substr
const lookups = []

for (let i = 0; i <= 9; i++)
  lookups[`${i}`.charCodeAt(0)] = i

module.exports = (a, b) => {
    let i = a.length - 1,
      ii = b.length - 1,
      totalStr = '',
      sum = 0,
      carry = 0
  
    for (; i >= 0 || ii >= 0; i--, ii--) {
      sum =
        i >= 0 && ii >= 0
          ? lookups[charCodeAt.call(a, i)] + lookups[charCodeAt.call(b, ii)]
          : ii < 0
          ? lookups[charCodeAt.call(a, i)]
          : lookups[charCodeAt.call(b, ii)]
  
      carry && (sum += carry)
      sum > 9 ? ((carry = 1), (sum -= 10)) : (carry = 0)
      totalStr = sum + totalStr
    }
  
    if (carry) return carry + totalStr
  
    for (i = 0; i < 3 && '0' === totalStr[i]; i++);
  
    if (i > 0) return substr.call(totalStr, i)
  
    return totalStr
  }
