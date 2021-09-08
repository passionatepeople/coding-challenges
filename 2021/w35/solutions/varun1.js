const sortItOut = (number) => {
  let i = 1
  let output = 0;
  let b = 1
  while (number > 0) {
    const last = number % 10;
    number = Math.floor(number / 10)

    if (last === 0) {
      b *= 10
      continue
    }

    output = output + last * i
    i *= 10
  }
  return output * b

};


module.exports = sortItOut;
