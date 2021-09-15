const findMinInt = (array) => {
  const filteredArray = array.filter(value => Number.isInteger(value));
  const smallestValue = Math.min(...filteredArray);

  return smallestValue;
};

module.exports = findMinInt;
