const supermarket = (arr, tills) => {
  let totalTime;
  let tillQueue = Array(tills <= 0 ? 1 : tills).fill(0);
  arr.forEach(customer => {
    let nextInLine = tillQueue.indexOf(Math.min(...tillQueue));
    tillQueue[nextInLine] += customer;
  });
  totalTime = Math.max(...tillQueue);
  return totalTime;
};

module.exports = supermarket;
