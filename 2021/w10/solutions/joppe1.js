const rankLetters = (input) => {
  const chars = input.toLowerCase();
  const registry = {};
  const arr = [];
  let i = chars.length;

  while (i) {
      i -= 1;
      const char = chars[i];

      if (!registry[char]) {
          arr.push(char);
          registry[char] = 0;
      }

      registry[char] += 1;
  }

  arr.sort((a, b) => {
      const diff = registry[a] - registry[b];

      if (diff == 0) {
          return a < b ? -1 : 1;
      }

      return -diff;
  });

  return arr;
};

module.exports = rankLetters;
