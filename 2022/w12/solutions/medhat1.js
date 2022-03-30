const { slice } = String.prototype;

const expandIt = (num) => {
  const stringified = '' + num;
  const len = stringified.length;
  if (len < 2) {
    return !num ? '' : stringified;
  }

  let maxZeros = slice.call('000000', 0, len - 1);
  let final = stringified[0] + maxZeros;
  for (let i = 1; i < len; i++) {
    maxZeros = slice.call(maxZeros, 1);
    if (stringified[i] !== '0') final += ' + ' + stringified[i] + maxZeros;
  }

  return final;
};

module.exports = expandIt;
