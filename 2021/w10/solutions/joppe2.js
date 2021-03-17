const rankLetters = (input) => {
  const chars = input.toLowerCase();
  const registry = {};
  let i = chars.length;

  while (i) {
      i -= 1;
      const char = chars[i];

      if (registry[char] === undefined) {
          registry[char] = 1000000 + char.charCodeAt(0);
      }

      registry[char] -= 1000;
  }

  const result = Object.values(registry);

  result.sort();

  return result.map((x) => {
      return String.fromCharCode(x % 1000);
  });
};

module.exports = rankLetters;
