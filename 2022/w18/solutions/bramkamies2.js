module.exports = n => {
  n = n.toString();
  let sum = Number(n[0]);
  for (let i = 1; i < n.length; i++) {
    sum += Number(n[i]);
  }
  return sum;
};