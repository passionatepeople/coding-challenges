module.exports = n => {
  const len = n.length - 1
  let i = 1;
  let sum = n[0]
  for (; i < len; i++) {
    if (n[i] == '9') {
      if (n[i - 1] != '7' || n[i + 1] != '7') {
        sum += n[i]
      }
    } else {
      sum += n[i]
    }
  }
  sum += n[len]
  return sum
}