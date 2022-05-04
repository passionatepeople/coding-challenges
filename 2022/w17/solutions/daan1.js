const ordered = (n1, n2, n1l, n2l) => {  
  if(n1l > n2l){
    return [n1, n2];
  }
  if(n1l < n2l){
    return [n2, n1, true];
  }
  for(let i = 0; i < n1l; i++){
    if(n1[i] > n2[i]){
      return [n1, n2];      
    }
    if(n1[i] < n2[i]){
      return [n2, n1, true];
    }
  }
  // number is equal
  return [n1, n2, false, true];
};

const removePretrailingZeros = (n) => {
  while(n[0] === "0"){
    n = n.slice(1);
  }
  return n;
};

const subtract = (input1, input2) => {
  let n1 = removePretrailingZeros(input1), n2 = removePretrailingZeros(input2);
  const n1l = n1.length, n2l = n2.length;
  let [big, small, swapped, equal] = ordered(n1, n2, n1l, n2l), result = "", borrowed = false;
  const offset = big.length - small.length;
  if(equal){return "0"}
  for(let i = big.length-1; i >= offset; i--){
    let a = borrowed? Number(big[i])-1 : Number(big[i]), b = Number(small[i - offset]);
    borrowed = a < b;
    a+= borrowed ? 10: 0;
    result = (a-b) + result;
  }
  for(let i = offset-1; i >= 0; i--){
    if(borrowed){
      let n = Number(big[i]);
      borrowed = n === 0;
      result = (borrowed ? 9 : n-1) + result;
    } else {
      result = ((i === 0 && big[i] === "0") ? "": big[i]) + result;
    }
  }
  result = removePretrailingZeros(result);
  return swapped ? "-"+result : result;
};

module.exports = subtract;