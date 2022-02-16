const fromCharCode = String.fromCharCode
const charCodeAt = String.prototype.charCodeAt

module.exports = arr => {
  const len = arr.length
  let i, curr = charCodeAt.call(arr[0], 0) + 1, next
  
  for (i = 1; i < len; i++) {
    next = charCodeAt.call(arr[i], 0)
    if (curr === next)
      ++curr
    else 
      return fromCharCode(curr)
  }
}
