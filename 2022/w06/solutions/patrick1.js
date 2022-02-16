const whatsMissing = (str) => {
  const isStrUppercase = !/[a-z]/.test(str) && /[A-Z]/.test(str);

  const alphabet = isStrUppercase
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "abcdefghijklmnopqrstuvwxyz"

  let startingPoint = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] !== alphabet[startingPoint + i]) {
      return alphabet[startingPoint + i];
    }
  }
};

module.exports = whatsMissing;
