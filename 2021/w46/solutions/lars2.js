const wheatFromTheChaff = (data) => {
  let i = 0;
  let result = 0;
  let holder = 0;

  const length = data.length

  let prevElementWasNumber = false
  for (; i < length; i++) {
    const element = data[i];

    if (element < '0' || element > '9') {
      prevElementWasNumber = false
      continue;
    }

    if (prevElementWasNumber) {
      holder = holder * 10
    } else {
      holder = 0
    }

    const newNumber = holder + +element
    holder = newNumber

    if (newNumber > result) {
      result = newNumber
    }

    prevElementWasNumber = true
  }

  return result;
};

module.exports = wheatFromTheChaff;
