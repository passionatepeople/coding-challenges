const expand = (num) => {
  let total = '', n = num;
  while(n!==0){
    total = (n%10)**2 +''+total;
    n = (n/10)<<0;
  }

  return total*1;
};

module.exports = expand;