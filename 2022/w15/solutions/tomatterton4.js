module.exports = (list) => {
    let output = '', len = list.length, i = 0

    if (len < 2) {
        while (i < len) {
            output += list[i] + ',';
            i++
        }
        return output + list[len-1]
    }

    let rangeCheck = (i, r) => i === r - 2

    for (i; i < len; i++) {
        if (rangeCheck(list[i], list[i + 2])) {
            output += list[i] + '-';
            while (i < len) {
                if (!rangeCheck(list[i], list[i + 2])) {
                    break;
                }
                i++
            }
        } else {
            output += list[i];
            if (i != len - 1) {
                output += ',';
            }
        }
    }
    return output;
}