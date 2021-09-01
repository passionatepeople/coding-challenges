const a = new Map().set('a', 1).set('b', 2).set('c', 3).set('d', 4).set('e', 5).set('f', 6)
.set('g', 7).set('h', 8).set('i', 9).set('j', 10).set('k', 11).set('l', 12).set('m', 13).set('n', 14).set('o', 15).set('p', 16).set('q', 17)
.set('r', 18).set('s', 19).set('t', 20).set('u', 21).set('v', 22).set('w', 23).set('x', 24).set('y', 25).set('z', 26)

.set('A', 1).set('B', 2).set('C', 3).set('D', 4).set('E', 5).set('F', 6).set('G', 7).set('H', 8).set('I', 9).set('J', 10).set('K', 11)
.set('L', 12).set('M', 13).set('N', 14).set('O', 15).set('P', 16).set('Q', 17).set('R', 18).set('S', 19).set('T', 20).set('U', 21)
.set('V', 22).set('W', 23).set('X', 24).set('Y', 25).set('Z', 26);

const mostValuable = (m) => {
  const x = m.split(' ');

  let c = { w: '', s: 0 };

  for (let i = 0, len = x.length; i < len; i++) {

    let s = 0;

    const k = x[i].split('');
    for (let b = 0, lon = k.length; b < lon; b++) {
      s += a.get(k[b]);
    }

    if (s > c.s) {
      c = { s, w: x[i] };
    }
  }
  return c.w;
};

module.exports = mostValuable;
