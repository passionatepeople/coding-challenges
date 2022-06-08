module.exports = (num, str = num + '', result = '') => {
  for (let i = 0; i < str.length; i++) {
    result += ((+str[i]) ** 2 + '');
  }
  return +result;
}