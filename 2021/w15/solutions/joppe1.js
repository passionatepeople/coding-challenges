const fixCase = (input) => {
  // your code here
  const parts = [];
  let prevUpperCase = undefined;
  let buffer = '';

  for (const char of input) {
      const isUpperCase =
          (char >= 'A' && char <= 'Z') || (char === "'" && prevUpperCase);
      const isDelimiter = char === '_' || char === '-';

      if (isDelimiter) {
          parts.push(buffer);
          buffer = '';
      } else if (prevUpperCase === false && isUpperCase === true) {
          parts.push(buffer);
          buffer = char;
      } else {
          buffer += char.toLowerCase();
      }

      prevUpperCase = isUpperCase;
  }
  parts.push(buffer);

  return parts.reduce((acc, part) => {
      return `${acc}${part.slice(0, 1).toUpperCase()}${part.slice(1)}`;
  });
};

module.exports = fixCase;
