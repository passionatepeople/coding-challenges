const digitsMap = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15,g:16,h:17,i:18,j:19,k:20,l:21,m:22,n:23,o:24,p:25,q:26,r:27,s:28,t:29,u:30,v:31,w:32,x:33,y:34,z:35}

const toInt = (digits, base) => {
  let result = undefined;

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i]
    if (typeof result == "undefined" && digit >= base) {
      return NaN;
    }

    if (digit >= base) {
      return result
    }

    result = (result ? result * base : 0) + digit;
  }

  return result;
}

const cache = new Map()
const getIntArr = (str) => {
  if (cache.has(str)) {
    return cache.get(str)
  }

  let res = []
  for (const char of str) {
    res.push(digitsMap[char])
  }

  cache.set(str, res)
  return res;
}

const findBase = (num1, num2, product) => {
  const intArr1 = getIntArr(num1)
  const intArr2 = getIntArr(num2)
  const intArrProd =  getIntArr(product)

  let res = 0;
  for (let i = 2; i < 37; i++) {
    const int1 = toInt(intArr1, i)
    const int2 = toInt(intArr2, i)
    const prod = toInt(intArrProd, i)

    if (int1 * int2 === prod) {
      res = i
      break;
    }
  }

  return res;
};

module.exports = findBase;
