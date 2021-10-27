const add = (num1, num2) => {
  let num1Len = num1.length - 1;
  let num2Len = num2.length - 1;
  let maxLen = num1Len > num2Len ? num1Len : num2Len;

  let arr = []; let mem = 0;
  for (; maxLen >= 0; maxLen--, num1Len--, num2Len--) {
    let num = mem;

    if (num1Len >= 0) {
      num += parseInt(num1[num1Len])
    }
    if (num2Len >= 0) {
      num += parseInt(num2[num2Len])
    }

    mem = 0;
    if (num < 10) {
      arr.push(num)
    } else {
      arr.push(num % 10)
      mem = 1
    }
    if (mem == 1 && maxLen == 0) arr.push(1)
  }

  while (arr[arr.length - 1] === 0) {
    arr.pop()
  }

  return arr.reverse().join('')
}


module.exports = add;
