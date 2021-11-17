const { indexOf } = String.prototype;
const { push, join } = Array.prototype;
let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const maskIt = (string, number, mask=number.toString(2), result=[]) => {
  while (mask.length < string.length) {
    mask += mask;
  }

  for (let i =0, j=0; i < string.length; i++) {
    const char = string[i];
    const idx = indexOf.call(letters, char);
    if (idx > -1) {
      push.call(result, mask[j] == '1' ? idx < 26 ? letters[idx + 26] : letters[idx-26] : char);
      j++;
    } else {
      push.call(result, char);
    }
  }

  return join.call(result, '');
};

module.exports = maskIt;