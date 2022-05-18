const indexOf = String.prototype.indexOf;
const nMap = ['9','8','7','6','5','4','3','2','1','0'];
const bigFive = (number)=>{
  let big = 0;
  for(let j = 0;big === 0; j++){
    for(let i = indexOf.call(number, nMap[j]); i !== -1 && i <= number.length -5; i = indexOf.call(number, nMap[j], i+1)){
      let current = Number(number.slice(i,i+5));
      if(current > big){
        big = current;
      }
    }
  }
  return big;
};
module.exports = bigFive;