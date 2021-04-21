module.exports = (input) => {
  if (!(input.includes('-') || input.includes('_'))) {
    return input === input.toUpperCase() ? input.toLowerCase() : input;
  }

  return [...input.toLowerCase()].reduce((r, c, i, a) => {
    if (c === '-' || c === '_') {
      a[i + 1] = a[i + 1].toUpperCase();
      return r;
    }

    return r + c;
  });
};