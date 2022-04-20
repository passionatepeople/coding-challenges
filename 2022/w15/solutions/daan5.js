const simplify = (arr) => {
  let output = '', lengthMin1 = arr.length -1;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if(current+2 === arr[i+2]){
      i++;
      while(true){
        if(arr[i]+1 !== arr[i+1]){
          current += '-' + arr[i];
          break;
        }
        i++;
      }
    }
    output += current;
    output += i === lengthMin1 ? '' : ',';
  }
  return output;
};

module.exports = simplify;