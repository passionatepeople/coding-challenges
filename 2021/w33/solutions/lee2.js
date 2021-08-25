// thank you stackoverflow
function stringFill3(x, n) {
  var s = "";
  for (;;) {
    if (n & 1) s += x;
    n >>= 1;
    if (n) x += x;
    else break;
  }
  return s;
}

const buildPyramid = (floors, character = "*") => {
  a = 2 * floors - 1;

  r = [];
  for (i = 0; i < floors; i++) {
    b = 2 * i + 1;
    c = stringFill3(" ", (a - b) / 2);
    r.push(c + stringFill3(character, b) + c);
  }

  return r;
};

module.exports = buildPyramid;
