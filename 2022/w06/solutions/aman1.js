const fromCharCode = String.fromCharCode
const charCodeAt = String.prototype.charCodeAt

module.exports = arr => {
  const len = arr.length;
  let i, curr, next;

  for (i = 0; i < len; i++) {
    curr = charCodeAt.call(arr[i], 0) + 1
    next = charCodeAt.call(arr[i + 1], 0)

    if (curr !== next)
      return fromCharCode(curr)
  }
}
