const addUpWithoutTens = (n) => {
  let result = 0;

  for (let i = 0; i <= n ; i++) {
    if (i % 10 !== 0) {
      result += i;
    }
  }

  return result;
};

module.exports = addUpWithoutTens;
