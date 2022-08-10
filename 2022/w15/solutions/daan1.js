const simplify = (arr) => {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if(current+1 === arr[i+1] && current+2 === arr[i+2]){
      i++;
      while(true){        
        if(arr[i]+1 !== arr[i+1]){
          current += '-' + arr[i];
          break;
        }
        i++;
      }
    }
    output += current + ',';
  }
  return output.substring(0, output.length-1);
};

module.exports = simplify;