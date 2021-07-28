const chopMeUp = (string, n, s) => {
  if(!n) n = 2;
  if(!s) s = '_';
  if(string.length === n || n === 1 || n === 0 ) return [string];

  const size = Math.ceil(string.length/n);
  const res = [];
  
  for (let i = 0, offset = 0; i < size; i++) {
    res[i] = string.substr(offset, n);
    offset += n;
  }

  for(let i = res.length - 1; i >=0; i--){
      if(res[i].length >= n) return res;
      while(res[i].length < n) res[i] = res[i] + s;
  }
  return res;
};

module.exports = chopMeUp;
