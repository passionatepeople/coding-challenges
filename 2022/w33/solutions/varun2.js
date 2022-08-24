module.exports = n => {
  const len = n.length - 1
  let i = 1;
  let sum = n[0]
  for (; i < len; i++) {
    if (n.charCodeAt(i) === 57) {
      if (n.charCodeAt(i - 1) !== 55 || n.charCodeAt(i + 1) != 55) {
        sum += n[i]
      }
    } else {
      sum += n[i]
    }
  }
  sum += n[len]
  return sum
}