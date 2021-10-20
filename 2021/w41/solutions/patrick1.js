const addUpWithoutTens = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++){
      if (i % 10 === 0) {
        i++
      } else {
        sum += i;
      }
    }
  return sum;
}
module.exports = addUpWithoutTens;