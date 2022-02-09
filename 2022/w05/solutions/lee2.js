const { toLowerCase, indexOf, lastIndexOf } = String.prototype;
const imSpecial = (str) => {
  const input = toLowerCase.call(str);
  for (let i = 0; i < str.length; i++) {
    if (indexOf.call(input, input[i]) === lastIndexOf.call(input, input[i])) {
      return str[i];
    }
  }

  return "";
};

module.exports = imSpecial;
