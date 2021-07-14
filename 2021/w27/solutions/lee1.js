

const sum2 = (e)=>e.reduce((a,b)=>a+b,0)

const balanceMe = (array) => {
 let arr = array
 if(arr.length===1){
   return 0
 }


  
  for(let i=0;i<arr.length;i++){
    let left = arr.slice(0,i)
    let right = i==arr.length-1?[0]: arr.slice(i+1)
    if(sum2(left)-sum2(right)==0){
      return i
    }
  }
  return -1
  };
  
  
  module.exports = balanceMe;
  