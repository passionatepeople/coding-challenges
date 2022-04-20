module.exports = arr => {
    let list = [arr[0], ','];
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        if (arr[i - 1] + 2 === arr[i + 1]) {
            list.pop();
            list.push('-');
        } else {
            list.push(arr[i]);
            list.push(',');
        }
    }

    let output = ''
    for (let i = 0; i < list.length - 1; i++) {
        output += "" + list[i];
    }
    return output
}