const getNum = (ip, arr = ip.split('.'), result = 0) => {
    for (let i = 0; i < arr.length; i++) {
        result = result << 8 | arr[i];
    }
    return result >>> 0;
}

module.exports = (ip1, ip2) => {
    const result = getNum(ip1) - getNum(ip2);
    return result < 0 ? -result - 1 : result - 1;
}