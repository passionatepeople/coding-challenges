module.exports = (arr) => {
    let list = [arr[0]], len = arr.length, i = 1, output = '';
    if (len < 2) {
        while (i < len) {
                output += arr[i] + ',';
            i++
        }
        return output + arr[len-1]
    }

    let sequenceCheck = (i, r) => i + 2 === r
    let range = false;
    while (i < len) {
        if (sequenceCheck(arr[i - 1], arr[i + 1])) {
            range = true
        } else {
            if (range) {
                list.push(list.pop() + '-' + arr[i]);
            } else {
                list.push(arr[i]);
            }
            range = false
        }
        i++
    }
    i = 0
    while (i < list.length - 1) {
        output += list[i] + ',';
        i++
    }
    return output + list[list.length - 1]
}