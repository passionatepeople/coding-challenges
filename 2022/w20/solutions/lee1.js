const withoutFives = (start, end) => {
  let count = 0;
  for (let i = start; i < end + 1; i++) {
    let str = String(i);
    if (str.indexOf("5") === -1) {
      count++;
    }
  }

  return count;
};

module.exports = withoutFives;