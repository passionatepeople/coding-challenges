module.exports = num => {
  let result = 0, rem = 1;
  for (; num > 0;) {
    let d = num % 10;

    result = d * d * rem + result;

    if (d > 3) rem *= 100
    else rem *= 10

    num = ~~(num / 10)
  }

  return result;
}