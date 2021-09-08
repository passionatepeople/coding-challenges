module.exports = number => {
  let result = '', zeros='', input=''+number;
  input.split('').map(a=> (+a ? result +=a : zeros+='0'))
  return +(result+zeros);
}