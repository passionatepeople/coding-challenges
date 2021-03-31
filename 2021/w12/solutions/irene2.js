// ugly but fast :D
const manipulateNumber = (number) => {
  let stringied = number.toString();
  let reversed = ""
  for (let i = stringied.length - 1; i >= 0; i--) {
    reversed += stringied[i]
  }

  stringied = (+number - +reversed).toString();

  let result = 0;
  for (let i = stringied.length - 1; i > 0; i--) {
    result += +stringied[i];
  }

  const first = stringied[0];
  return first === '-' ? -result : result + +first;
};

module.exports = manipulateNumber;
