const supermarket = (arr, tills) => {
  let q = Array(tills <= 0 ? 1 : tills).fill(0);
  arr.forEach(c => {q[q.indexOf(Math.min(...q))] += c;});
  return Math.max(...q);
};
module.exports = supermarket;