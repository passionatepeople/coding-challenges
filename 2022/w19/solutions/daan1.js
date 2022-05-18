const bigFive = (number)=>{
  let big = Number(number.slice(0,5)), first = Number(number.charAt(0));
  for(let i = 1; i <= number.length -5; i++){
    let currentFirst = Number(number.charAt(i));
    if(currentFirst < first){
      continue;
    }

    let current = Number(number.slice(i,i+5));
    if(current > big){
      big = current;
      first = currentFirst;
    }
  }
  return big;
};
module.exports = bigFive;