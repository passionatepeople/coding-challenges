const expandIt = (num) => {
  if (!num) return '';
  const stringify = '' + num;
  if (num < 10) return stringify;
  let len = stringify.length;

  let zeros = 1;
  const firstItem = stringify[len - 1];
  let final = firstItem != '0' ? firstItem : '';
  while (len > 1) {
    const n = +stringify[len - 2];
    zeros *= 10;
    if (n) final = n * zeros + (final && ' + ') + final;
    --len;
  }

  return final;
};

module.exports = expandIt;
