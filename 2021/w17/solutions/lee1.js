const isValid = (c) => {
  let b=[]
  for(let i=0;i<c.length;i++){
    if(c[i]=='('){
      b.push(1)
    }else if(c[i]==')'){
      if(!b.pop())return false
    }
  }
  return !b.length;
};

module.exports = isValid;
