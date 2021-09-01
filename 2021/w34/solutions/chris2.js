const alphabeth = new Map();

alphabeth.set('a', 1);
alphabeth.set('b', 2);
alphabeth.set('c', 3);
alphabeth.set('d', 4);
alphabeth.set('e', 5);
alphabeth.set('f', 6);
alphabeth.set('g', 7);
alphabeth.set('h', 8);
alphabeth.set('i', 9);
alphabeth.set('j', 10);
alphabeth.set('k', 11);
alphabeth.set('l', 12);
alphabeth.set('m', 13);
alphabeth.set('n', 14);
alphabeth.set('o', 15);
alphabeth.set('p', 16);
alphabeth.set('q', 17);
alphabeth.set('r', 18);
alphabeth.set('s', 19);
alphabeth.set('t', 20);
alphabeth.set('u', 21);
alphabeth.set('v', 22);
alphabeth.set('w', 23);
alphabeth.set('x', 24);
alphabeth.set('y', 25);
alphabeth.set('z', 26);

alphabeth.set('A', 1);
alphabeth.set('B', 2);
alphabeth.set('C', 3);
alphabeth.set('D', 4);
alphabeth.set('E', 5);
alphabeth.set('F', 6);
alphabeth.set('G', 7);
alphabeth.set('H', 8);
alphabeth.set('I', 9);
alphabeth.set('J', 10);
alphabeth.set('K', 11);
alphabeth.set('L', 12);
alphabeth.set('M', 13);
alphabeth.set('N', 14);
alphabeth.set('O', 15);
alphabeth.set('P', 16);
alphabeth.set('Q', 17);
alphabeth.set('R', 18);
alphabeth.set('S', 19);
alphabeth.set('T', 20);
alphabeth.set('U', 21);
alphabeth.set('V', 22);
alphabeth.set('W', 23);
alphabeth.set('X', 24);
alphabeth.set('Y', 25);
alphabeth.set('Z', 26);

const mostValuable = (sentence) => {
  const words = sentence.split(' ');

  let best = { word: '', score: 0 };

  for (let i = 0, len = words.length; i < len; i++) {

    let score = 0;

    const chars = words[i].split('');
    for (let a = 0, lon = chars.length; a < lon; a++) {
      score += alphabeth.get(chars[a])
    }

    if(score > best.score) {
      best = { score, word: words[i] };
    }
  }

  return best.word;
};

module.exports = mostValuable;
