module.exports = (value) => {
  const state = []
  const pairs = {'(': ')', '[': ']', '{': '}'}

  for (const char of value) {
    if (pairs[char]) {
      state.push(char)
    } else if (pairs[state.pop()] !== char) {
      return false
    }
  }

  return true
}