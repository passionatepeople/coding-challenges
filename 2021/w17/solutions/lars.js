const map = {
  '(': ')'
}
const isValid = (code) => {
  const table = [];

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '(') {
      table.push('(')
    } else if (code[i] === ')' && code[i] !== map[table.pop()]) {
      return false
    }
  }

  return table.length === 0;
};

module.exports = isValid;
