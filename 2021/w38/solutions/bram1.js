const multiply = (number) => {
  let str = number.toString();
  let result = 1;

  for (let i = 0; i < str.length; i++) {
    result *= str[i];
  }

  return result;
}


const evaporate = (number) => {
  if (number < 10) {
    return 0;
  }

  let iteration = 1;
  let result = multiply(number);

  while (result >= 10) {
    result = multiply(result);
    iteration++
  }

  return iteration;
};

module.exports = evaporate;
