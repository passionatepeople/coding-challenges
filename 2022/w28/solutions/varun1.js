const ipDiff = [0, 0, 0, 0]
let i = 0;
let j = 0;
let sum = 0;

const thingsBetweenUs = (ip1, ip2) => {

    for (i = 0, j = 0; i <= ip2.length; i++) {
        if (ip2[i] == '.' || i == ip2.length) {
            ipDiff[j] = sum;
            sum = 0;
            j++;
            continue;
        }
        sum *= 10;
        sum += +ip2[i]
    }

    for (i = 0, j = 0; i <= ip1.length; i++) {
        if (ip1[i] == '.' || i == ip1.length) {
            ipDiff[j] -= sum;
            sum = 0;
            j++;
            continue;
        }
        sum *= 10;
        sum += +ip1[i]
    }


    let result = ipDiff[3] - 1;
    let range = 256;
    result += ipDiff[2] * range;
    range *= 256
    result += ipDiff[1] * range;
    range *= 256;
    result += ipDiff[0] * range

    return result
};

module.exports = thingsBetweenUs;