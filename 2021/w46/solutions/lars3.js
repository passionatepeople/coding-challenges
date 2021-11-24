const wheatFromTheChaff = (data) => {
  let i = 0;
  let result = 0;
  let holder = 0;

  const length = data.length

  let prevElementWasNumber = false
  for (; i < length; i++) {
    const char = data[i];

    if (char < '0' || char > '9') {
      prevElementWasNumber = false
      continue;
    }

    if (prevElementWasNumber) {
      holder = holder * 10
    } else {
      holder = 0
    }

    holder = holder + (char | 0)

    if (holder > result) {
      result = holder
    }

    prevElementWasNumber = true
  }

  return result;
};

module.exports = wheatFromTheChaff;
