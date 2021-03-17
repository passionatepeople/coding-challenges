const rankLetters = (input) => {
  const chars = input.toLowerCase();
  const count = chars.length;
  const registry = {};

  for (let i = 0; i < count; i++) {
      const char = chars[i];

      if (!registry[char]) {
          registry[char] = 1000000 + char.charCodeAt(0);
      }

      registry[char] -= 1000;
  }

  const numbers = Object.values(registry);

  numbers.sort();

  const arr = [];
  const max = numbers.length;

  for (let i = 0; i < max; i++) {
      arr.push(String.fromCharCode(numbers[i] % 1000));
  }

  return arr;
};

module.exports = rankLetters;
