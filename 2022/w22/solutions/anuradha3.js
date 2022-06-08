module.exports = (num, str = num + '', result = '', i = 0) => {
  for (; i < str.length; i++) {
    result = result + str[i] ** 2;
  }
  return +result;
}