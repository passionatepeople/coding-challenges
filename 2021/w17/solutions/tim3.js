const isValid = (code) => {
  let occurences = 0;
  for (i = code.length; i--; ) {
    if (code.charCodeAt(i) === 40 || code.charCodeAt(i) === 41) occurences++;
  }
  const even = occurences % 2 === 0;

  return even;
};

module.exports = isValid;
