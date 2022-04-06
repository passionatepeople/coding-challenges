const braceful = (input) => {
  const len = input.length

  if (len === 0) return false;

  const arr = new Array(len);

  let j = -1;

  for (let i = 0; i < len; i++) {

    let char = input[i]

    switch (char) {
      case '[':
      case '(':
      case '{':
        arr[++j] = char;
        continue;
      case ']':
        char = '['; break;
      case ')':
        char = '('; break;
      case '}':
        char = '{'; break;
    }
    if (j >= 0 && arr[j] === char) {
      j--;
    } else {
      return false
    }

  }

  return j === -1
};

module.exports = braceful;
