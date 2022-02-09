module.exports = (str) => {
  const map = new Map();
  let index = 0,
    char,
    lowerChar,
    item;

  while (index < str.length) {
    char = str[index];
    lowerChar = char.toLowerCase();
    item = map.get(lowerChar);
    
    if (item) item[0] += 1;
    else map.set(lowerChar, [1, char]);
    index++;
  }

  for (let [, value] of map) {
    if (value[0] === 1) return value[1];
  }

  return '';
};
