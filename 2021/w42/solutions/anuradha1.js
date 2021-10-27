const add = (a, b, sum='') => {
  if (b.length > a.length ) {
      [a, b] = [b, a];
  }

  let len = a.length, carry = 0, digit1, digit2, tempSum, currSum;
  for (let i = 0; i < len; i++) {
      digit1 = +(a.charAt(len - 1 - i));      
      digit2 = +(b.charAt(b.length - 1 - i)) || 0;      
      tempSum = carry + digit1 + digit2 + '';                  
      currSum = tempSum.charAt(tempSum.length - 1);
      carry = +(tempSum.substr(0, tempSum.length - 1));  
      carry = carry || 0;                       

      sum = i === len-1 ? tempSum + sum : currSum + sum;  
  }
  return sum.replace(/^0+/, '');;
};

module.exports = add;