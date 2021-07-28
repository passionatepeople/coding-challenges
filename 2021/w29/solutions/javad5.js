const chopMeUp = (string, n = 2, s = "_") => {
  let length = string.length,
    result = [],
    i = 0,
    next;

  while (true) {
    next = i + n;
    if (next >= length) {
      result.push(string.substring(i).padEnd(n, s));
      break;
    } else {
      result.push(string.substring(i, next));
    }
    i = next;
  }

  return result;
};

module.exports = chopMeUp;
