const charCodeAt = String.prototype.charCodeAt,
  fromCharCode = String.fromCharCode;

const sevenAteNine = (numbers) => {
  const result = new Array();

  let prev = charCodeAt.call(numbers, 0),
    current = charCodeAt.call(numbers, 1),
    next = charCodeAt.call(numbers, 2),
    charIndex = 2,
    resultIndex = 0;

  result[0] = prev;

  while (current) {
    if (current < 57 || next != 55 || prev != 55) {
      result[++resultIndex] = current;
    }
    prev = current;
    current = next;
    next = charCodeAt.call(numbers, ++charIndex);
  }

  return fromCharCode.apply("", result);
};

module.exports = sevenAteNine;