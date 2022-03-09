const substring = new String().substring
const goAround = (str) => {
  let orig = str;
  let counter = str.length;
  if(counter == 1) return [str]
  let result = new Array
  let tmp;
  while(counter > 1){
    tmp = str[0];
    str = substring.call(str,1) + tmp;
    result.push(str);
    counter--
  }
  return result.push(orig) && result;
}

module.exports = goAround;
