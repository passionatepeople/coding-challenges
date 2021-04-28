module.exports = array => {
  let result = 0
  let current = 0
  for (let i = 0; i < array.length; i++) {
    current += array[i]
    if (current < 0) current = 0
    else if (current > result) result = current
  }
  return result
}