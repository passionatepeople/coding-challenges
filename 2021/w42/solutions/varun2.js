const add = (num1, num2) => {
  let num1Len = num1.length - 1;
  let num2Len = num2.length - 1;
  let maxLen = num1Len > num2Len ? num1Len : num2Len;

  let str = ""; let mem = 0;
  for (; maxLen >= 0; maxLen--, num1Len--, num2Len--) {
    let num = mem;

    if (num1Len >= 0) num += + (num1[num1Len]);
    if (num2Len >= 0) num += + (num2[num2Len]);

    if (num < 10) {
      str = num + str
      mem = 0;
    } else {
      str = (num % 10) + str
      mem = 1
    }
  }
  if (mem == 1) str = '1' + str

  while (str[0] == "0") {
    str = str.slice(1)
  }

  return str
}


module.exports = add;
