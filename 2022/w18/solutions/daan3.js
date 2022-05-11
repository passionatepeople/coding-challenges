const allTogether = (number) => {
  let total = 0, n = number;
  while(n !== 0){
    total += n % 10;
    n = ~~(n / 10);
  }
  return total;
};
module.exports = allTogether;