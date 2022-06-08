const expand = (num) => {
  let result = 0
  let s = 1
  while (num) {
    let n = num%10
    n *= n

    
    result += n*s
    if (n < 10) {
      s *= 10
    } else {
      s *= 100
    } 


    num = num /10 |0
  }
  // your solution here

  return result;
};

module.exports = expand;