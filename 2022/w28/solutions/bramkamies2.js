const parseIp = (ip) => {
    let sum = 0;
    let sectionIndex = 0;
    let sectionValue = 0;
    for (let i = 0; i < ip.length; i++) {
        const char = ip.charCodeAt(i);
        if (char === 46) {
            sum += sectionValue << (24 - sectionIndex * 8);
            sectionIndex++;
            sectionValue = 0;
        } else {
            sectionValue = sectionValue * 10 + (char - 48);
        }
    }
    return sum + sectionValue;
};
module.exports = (ip1, ip2) => parseIp(ip2) - parseIp(ip1) - 1;