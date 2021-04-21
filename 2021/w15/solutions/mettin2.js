module.exports = (input) => input.split(/([A-Z][a-z]+)|[-_]+/g).reduce((accumulator, current) => {
  if (current) {
    if (!accumulator) {
      return current.toLowerCase();
    }
    return accumulator + current[0].toUpperCase() + current.slice(1).toLowerCase()
  }
  return accumulator;
}, '');
