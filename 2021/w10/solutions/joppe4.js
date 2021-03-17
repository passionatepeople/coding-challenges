const rankLetters = (input) => {
  const chars = input.toLowerCase();
  const count = chars.length;
  const registry = {};
  const inverse = {};

  for (let i = 0; i < count; i++) {
      const char = chars[i];

      if (!registry[char]) {
          registry[char] = 1000000 + char.charCodeAt(0);
      }

      registry[char] -= 1000;
  }

  const sortable = [];

  for (const char in registry) {
      const key = '' + registry[char];

      sortable.push(key);
      inverse[key] = char;
  }

  sortable.sort();

  const max = sortable.length;
  const arr = [];

  for (let i = 0; i < max; i++) {
      arr.push(inverse[sortable[i]]);
  }

  return arr;
};

module.exports = rankLetters;
