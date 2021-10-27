const add = (a, b) => {
    let result = "";
    let aLength = a.length;
    let bLength = b.length;
    let addResult = 0;
    let next = 0;
    const diff = Math.abs(aLength - bLength);


    if (aLength > bLength) {
        b = "0".repeat(diff) + b;
    }

    if (aLength < bLength) {
        a = "0".repeat(diff) + a;
    }

    for (let index = a.length - 1; index >= 0; index--) {
        addResult = next + +a[index] + +b[index];

        if (addResult >= 10 && index !== 0) {
            result = String(addResult - 10) + result;
            next = 1;
        } else {
            result = String(addResult) + result;
            next = 0;
        }
    }

    // Trim leading zeroes.
    while(result.charAt(0) === '0') {
        result = result.substring(1);
    }

    return result;
};

module.exports = add;
