module.exports = (input) => {
  let result = input[0];
  let previous = input.charCodeAt(0);
  if (previous > 96 && previous < 123) previous -= 32;
  let current = input.charCodeAt(1);
  let i = 1;
  while (current) {
    if (current > 96 && current < 123) current -= 32;
    if (current != previous || current < 65 || current > 90) {
      result += input[i];
      previous = current;
    }
    current = input.charCodeAt(++i);
  }
  return result;
};