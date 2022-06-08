module.exports = num => {
  let result = 0;
  let div = 0;
  let rem = 1;
  for (; num > 0; num = (num / 10)|0) {
    div = num % 10;
    div = div * div;

    result = div * rem + result;
    if (div > 9) rem *= 100
    else rem *= 10
  }

  return result;
}