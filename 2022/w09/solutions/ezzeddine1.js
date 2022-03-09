const substring = new String().substring
const goAround = (str) => {
  let counter = str.length;
  if(counter == 1) return [str]
  let result = [];
  let tmp;
  while(counter > 0){
    tmp = str[0];
    str = substring.call(str,1) + tmp;
    result.push(str);
    counter--
  }
  return result;
}
module.exports = goAround;