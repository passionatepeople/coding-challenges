const charCodeAt = String.prototype.charCodeAt
const stack = new Array(12)
const arr = new Array(255)
arr[40] = 41
arr[91] = 93
arr[123] = 125

module.exports = (a) => {
  let len = a.length, count = -1, i = 0, ch

  for (; i < len; i++) {
    ch = charCodeAt.call(a, i)

    if (ch == 40 || ch == 91 || ch == 123) {
      stack[++count] = arr[ch]
    } else if (ch != stack[count]) {
      return false
    } else {
      count--
    }
  }

  return count == -1
}