module.exports = number => {
  let result = '', zeros=0, input=''+number;
  input.split('').map(a=> (+a ? result +=a : zeros++))
  return parseInt(result.padEnd(result.length+zeros, '0'));
}