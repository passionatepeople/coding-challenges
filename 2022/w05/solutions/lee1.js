const imSpecial = (str) => {
  const input = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (input.indexOf(input[i]) === input.lastIndexOf(input[i])) {
      return str[i];
    }
  }

  return "";
};

module.exports = imSpecial;
