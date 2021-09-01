const alphabetMap = new Map();
alphabetMap.set('a', 1);
alphabetMap.set('b', 2);
alphabetMap.set('c', 3);
alphabetMap.set('d', 4);
alphabetMap.set('e', 5);
alphabetMap.set('f', 6);
alphabetMap.set('g', 7);
alphabetMap.set('h', 8);
alphabetMap.set('i', 9);
alphabetMap.set('j', 10);
alphabetMap.set('k', 11);
alphabetMap.set('l', 12);
alphabetMap.set('m', 13);
alphabetMap.set('n', 14);
alphabetMap.set('o', 15);
alphabetMap.set('p', 16);
alphabetMap.set('q', 17);
alphabetMap.set('r', 18);
alphabetMap.set('s', 19);
alphabetMap.set('t', 20);
alphabetMap.set('u', 21);
alphabetMap.set('v', 22);
alphabetMap.set('w', 23);
alphabetMap.set('x', 24);
alphabetMap.set('y', 25);
alphabetMap.set('z', 26);

function mostValuable(sentence) {
  const arr = sentence.split(' ');
  let highestSum = 0;
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    const currSum = arr[i].toLowerCase().split('').reduce((sum, curr) => sum + (alphabetMap.get(curr) || 0), 0)
    if (currSum > highestSum) { result = arr[i]; highestSum = currSum; }
  }
  
  return result;
};

module.exports = mostValuable;