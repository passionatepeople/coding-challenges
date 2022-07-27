const charCodeAt = String.prototype.charCodeAt;
const isThisABook = (isbn) => {
  let result = 0,
    i = 0;
  while (i < 5) {
    result += (charCodeAt.call(isbn, i) - 48) * (i + 1) + (charCodeAt.call(isbn, 9 - i) - 48) * (10 - i++);
  }
  return result % 11 == 0;
};
module.exports = isThisABook;