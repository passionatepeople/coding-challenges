const add = (num1, num2) => {

  let num2mod = num2.replace(/^0+/, '');
  let num1mod = num1.replace(/^0+/, '');

  let sum = "";
  let num1Length = num1mod.length;
  let num2Length = num2mod.length;

  if(num2Length > num1Length ){
      let temp = num2mod;
      num2mod = num1mod;
      num1mod = temp;
  }
  let carry = 0;
  let a, b, temp, digitSum;
  for (let i = 0; i < num1mod.length; i++) {
      a = parseInt(num1mod.charAt(num1mod.length - 1 - i));
      b = parseInt(num2mod.charAt(num2mod.length - 1 - i));
      b = (b) ? b : 0;
      temp = (carry + a + b).toString();
      digitSum = temp.charAt(temp.length - 1);
      carry = parseInt(temp.substr(0, temp.length - 1));
      carry = (carry) ? carry : 0;
      sum = (i === num1mod.length - 1) ? temp + sum : digitSum + sum;
  }
  return sum;

}

module.exports = add;
