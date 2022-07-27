const lookup = {
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  88: 10,
};

const isThisABook = (isbn) => {
  let sum = 0;
  for (let i = 0; i < isbn.length; i++) {
    sum += lookup[isbn.charCodeAt(i)] * (i + 1);
  }

  return sum % 11 === 0;
};

module.exports = isThisABook;