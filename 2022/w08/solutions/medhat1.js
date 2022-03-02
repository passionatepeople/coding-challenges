const supermarket = (arr, tills) => {
  let tillsArr = Array(tills).fill(0);
  arr.forEach(customer => {
    const fastest = tillsArr.indexOf(Math.min(...tillsArr));
    tillsArr[fastest] += customer;
  });
  return Math.max(...tillsArr);
};


module.exports = supermarket;
