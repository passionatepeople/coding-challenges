const map = new Map();
map.set('a', 'A').set('b', 'B').set('c', 'C').set('d', 'D').set('e', 'E').set('f', 'F').set('g', 'G').set('h', 'H').set('i', 'I').set('j', 'J').set('k', 'K').set('l', 'L').set('m', 'M').set('n', 'N').set('o', 'O').set('p', 'P').set('q', 'Q').set('r', 'R').set('s', 'S').set('t', 'T').set('u', 'U').set('v', 'V').set('w', 'W').set('x', 'X').set('y', 'Y').set('z', 'Z')
.set('A', 'a').set('B', 'b').set('C', 'c').set('D', 'd').set('E', 'e').set('F', 'f').set('G', 'g').set('H', 'h').set('I', 'i').set('J', 'j').set('K', 'k').set('L', 'l').set('M', 'm').set('N', 'n').set('O', 'o').set('P', 'p').set('Q', 'q').set('R', 'r').set('S', 's').set('T', 't').set('U', 'u').set('V', 'v').set('W', 'w').set('X', 'x').set('Y', 'y').set('Z', 'z');

const maskIt = (string, number, mask=number.toString(2), result='') => {
  while (mask.length < string.length) {
    mask += mask;
  }

  for (let i =0, j=0; i < string.length; i++) {
    const char = string[i];
    const val = map.get(char);
    if (val) {
      result += mask[j] == '1' ? val : char;
      j++;
    } else {
      result += char;
    }
  }

  return result;
};

module.exports = maskIt;