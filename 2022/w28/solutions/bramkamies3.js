const charCodeAt = String.prototype.charCodeAt;
module.exports = (ip1, ip2) => {
    let sum = -1;
    let sectionIndex1 = 0;
    let sectionValue1 = 0;
    const L1 = ip1.length;
    for (let i = 0; i < L1; i++) {
        const char = charCodeAt.call(ip1, i);
        if (char === 46) {
            sum -= sectionValue1 << (24 - sectionIndex1 * 8);
            sectionIndex1++;
            sectionValue1 = 0;
        } else {
            sectionValue1 = sectionValue1 * 10 + (char - 48);
        }
    }

    let sectionIndex2 = 0;
    let sectionValue2 = 0;
    const L2 = ip2.length;
    for (let i = 0; i < L2; i++) {
        const char = charCodeAt.call(ip2, i);
        if (char === 46) {
            sum += sectionValue2 << (24 - sectionIndex2 * 8);
            sectionIndex2++;
            sectionValue2 = 0;
        } else {
            sectionValue2 = sectionValue2 * 10 + (char - 48);
        }
    }
    return sum + sectionValue2 - sectionValue1;
};