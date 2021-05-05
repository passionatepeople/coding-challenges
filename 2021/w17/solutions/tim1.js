const findOccurences = (haystack, needle) => {
  let counts = 0;
  for (i = haystack.length; i--; ) {
    if(haystack.charCodeAt(i) === needle ) counts++;
  }
  return counts;
}

const isValid = (code) => {
  const open = findOccurences(code, 40);
  const close = findOccurences(code, 41);
  const even = (open + close) % 2 === 0;

  return even;
};

module.exports = isValid;
