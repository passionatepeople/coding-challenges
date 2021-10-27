const { charAt, substr, replace } = String.prototype;

const add = (a, b, sum='') => {
    if (b.length > a.length ) {
        [a, b] = [b, a];
    }

    let len = a.length, carry = 0, digit1, digit2, tempSum, currSum;
    for (let i = 0; i < len; i++) {
        digit1 = +charAt.call(a, len - 1 - i);      
        digit2 = +charAt.call(b, b.length - 1 - i) || 0;      
        tempSum = carry + digit1 + digit2 + '';                  
        currSum = charAt.call(tempSum, tempSum.length - 1);
        carry = +substr.call(tempSum, 0, tempSum.length - 1) || 0;                     

        sum = i === len-1 ? tempSum + sum : currSum + sum;  
    }
    return replace.call(sum, /^0+/, '');;
};

module.exports = add;