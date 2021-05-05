const isValid = (s) => {
  count = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      count++
    }
    if (s[i] == ')') {
      --count
    }
    if (count < 0) {
      return false
    }
  }

  return count == 0;
};

module.exports = isValid;
