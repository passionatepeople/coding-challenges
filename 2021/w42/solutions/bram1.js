const add = (first, second) => {
    let result = "";
    let next = 0;
    let t, charA, charB, temp, tempLength, digitSum;

    // Make sure biggest string is first.
    if(second.length > first.length ){
        t = second;
        second = first;
        first = t;
    }

    let str1Length = first.length;
    let str2Length = second.length;

    for (let i = 0; i < str1Length; i++) {
        // Get characters at right side.
        charA = +first.charAt(str1Length - i - 1);
        charB = +second.charAt(str2Length - i - 1) || 0;

        temp = (next + charA + charB).toString();
        tempLength = temp.length;

        // Get digit for current iteration.
        digitSum = temp.charAt(tempLength - 1);

        // Determine overflow for next iteration.
        next = +temp.substr(0, tempLength - 1) || 0;

        // If last iteration add remaining digits.
        result = (i < str1Length - 1) ? digitSum + result : temp + result;
    }

    // Trim leading zeroes.
    while(result.charAt(0) === '0') {
        result = result.substring(1);
    }

    return result;
};

module.exports = add;
